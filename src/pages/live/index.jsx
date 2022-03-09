import React, { useEffect, useState, useRef, useMemo } from "react";
import City from "../../assets/city.svg";
import { TweenMax, Power0, Power3, TimelineMax } from "gsap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SvgComponent from "../svgtest";
import webSocket from "socket.io-client";
import "./style.scss";

function Comment(props) {
  return (
    <CSSTransition key={props.key} in={true} timeout={1000} classNames="fade" unmountOnExit>
      <div className="comment-item">
        <div className="head"></div>
        <div className="comment-text">
          <p className="name">{props.name}</p>
          <p className="text">{props.content}</p>
        </div>
      </div>
    </CSSTransition>
  );
}

const MemorizeComment = React.memo(Comment);

function Live() {
  var mediaRecorder = null;
  const [time, setTime] = useState(0);
  const [emojiList, setEmojiList] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [message, setMessage] = useState("");
  const [ts, setTs] = useState("");
  const [timeId, setTimeId] = useState("");
  const emojis = ["🦁", "🍗", "🎁", "🏀", "🐖", "🐥"];
  var chunks = [];
  const comment = {
    name: "Tom",
    color: "black",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.consect",
  };

  const fullTime = useMemo(() => {
    let sec = time % 60;
    let min = Math.floor(time / 60);
    let hour = Math.floor(time / 3600) % 24;
    let pd = (num) => num.toString().padStart(2, "0");
    return `${pd(hour)}:${pd(min)}:${pd(sec)}`;
  }, [time]);

  const liveRef = useRef();
  const emojiRef = useRef([]);

  const addEmoji = (emoji) => {
    console.log(emoji);
    setEmojiList((state) => [...state, emoji]);
  };

  const addComment = () => {
    setCommentList((state) => [...state, { name: "Tom", content: message }]);
    setMessage("");
  };

  const getVideoPermission = () => {
    let constraints = { audio: true, video: { width: 360, height: 480 } };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (mediaStream) {
        var video = document.querySelector("video");
        video.srcObject = mediaStream;
        console.log(mediaStream);
        mediaRecorder = new MediaRecorder(mediaStream);
        console.log("mediaRecorder", mediaRecorder);

        video.onloadedmetadata = function (e) {
          video.play();
        };
        mediaRecorder.onstop = function (e) {
          console.log("data available after MediaRecorder.stop() called.");

          var clipName = prompt("Enter a name for your sound clip");

          var clipContainer = document.createElement("article");
          var clipLabel = document.createElement("p");
          var audio = document.createElement("audio");
          var deleteButton = document.createElement("button");

          clipContainer.classList.add("clip");
          audio.setAttribute("controls", "");
          deleteButton.innerHTML = "Delete";
          clipLabel.innerHTML = clipName;

          clipContainer.appendChild(audio);
          clipContainer.appendChild(clipLabel);
          clipContainer.appendChild(deleteButton);

          audio.controls = true;

          var blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          chunks = [];
          var audioURL = URL.createObjectURL(blob);
          audio.src = audioURL;
          console.log("recorder stopped", audio);

          const a = document.createElement("a");
          a.style.display = "none";
          a.href = audioURL;
          a.download = "test.webm";
          document.body.appendChild(a);
          a.click();
          setTimeout(() => {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(audioURL);
          }, 100);
        };

        mediaRecorder.ondataavailable = function (e) {
          console.log("eeeeeeeeeeee", e.data);
          sendMessage(e.data);
          chunks.push(e.data);
        };
        setTs(mediaRecorder);
      })
      .catch(function (err) {
        console.log(err.name + ": " + err.message);
      });
  };

  const startRecord = () => {
    let timeId = setInterval(() => {
      setTime((state) => state + 1);
    }, [1000]);
    setTimeId(timeId);
    TweenMax.to(liveRef.current, 1, {
      yoyo: true,
      repeat: -1,
      ease: Power0,
      css: {
        backgroundColor: "rgba(255,0,0,0.4)",
      },
    });
    console.log(ts);
    ts.start(1000);
    console.log("recorder started");
  };
  const stopRecord = () => {
    clearInterval(timeId);
    setTime(0);
    ts.stop();
    console.log("recorder stopped");
  };

  useEffect(() => {
    // getVideoPermission();
  }, []);
  useEffect(() => {
    if (emojiList.length > 0) {
      let ref = emojiRef.current[emojiRef.current.length - 1];
      let tl = new TimelineMax({ x: 350 });
      tl.set(ref, {
        x: -100 + 100 * Math.random() + 20,
      })
        .to(ref, 1, {
          y: -300 + Math.random() * 100,
          ease: Power0.easeOut,
          scale: 2,
        })
        .to(ref, 1.5, {
          x: -500,
          ease: Power3.easeIn,
          scale: 0.2,
        });
    }
  }, [emojiList]);
  useEffect(() => {
    let container = document.querySelector(".comment-content");
    container.scrollTo(0, container.scrollHeight);
  }, [commentList]);

  const [ws, setWs] = useState(null);

  const connectWebSocket = () => {
    //開啟
    setWs(webSocket("http://localhost:3000", { transports: ["websocket"] }));
  };

  useEffect(() => {
    if (ws) {
      //連線成功在 console 中打印訊息
      console.log("success connect!");
      //設定監聽
      initWebSocket();
    }
  }, [ws]);

  const initWebSocket = () => {
    console.log("wqeqwe", ws);
    //對 push 設定監聽，如果 server 有透過 push 傳送訊息，將會在此被捕捉
    ws.on("push", (message) => {
      console.log(message);
    });
    getVideoPermission();
  };

  const sendMessage = (data) => {
    //以 emit 送訊息，並以 push 為名稱送給 server 捕捉
    // console.log(ws);
    ws.emit("push", data);
  };
  return (
    <div className="livePage">
      <p onClick={connectWebSocket}>conn</p>

      <div className="camera">
        <video id="myvideo" autoPlay={true} muted={true}></video>
        <div className="live-tag">
          <div ref={liveRef} className="live">
            LIVE
          </div>
          <div className="time">{fullTime}</div>
          <button onClick={startRecord}>start</button>
          <button onClick={stopRecord}>stop</button>
        </div>
        <div className="message-area">
          <div className="comment-content">
            <TransitionGroup>
              {commentList.map((commentInfo, index) => (
                <MemorizeComment
                  key={index + commentInfo.content}
                  name={commentInfo.name}
                  content={commentInfo.content}
                />
              ))}
            </TransitionGroup>
          </div>
          <div className="send-message-area">
            <input
              className="text-input"
              type="text"
              value={message}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addComment();
                }
              }}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
            <ul className="emoji-tool-area">
              {emojis.map((emoji) => (
                <button
                  key={emoji + "tool"}
                  onClick={() => {
                    addEmoji(emoji);
                  }}
                >
                  {emoji}
                </button>
              ))}
            </ul>
          </div>
          <div className="emoji-show-area">
            {emojiList.map((emoji, i) => (
              <li key={emoji + "tool" + i} ref={(el) => (emojiRef.current[i] = el)}>
                {emoji}
              </li>
            ))}
          </div>
        </div>
      </div>
      {/* <SvgComponent /> */}
      {/* <img id="logo" src={City} width="900px" height="900px" /> */}
    </div>
  );
}

export default Live;
