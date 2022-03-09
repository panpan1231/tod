import React, { useEffect } from "react";
import { TweenMax, Power0, Power3, TimelineMax } from "gsap";

const SvgComponent = (props) => {
  useEffect(() => {
    TweenMax.to("#car ", 1, {
      yoyo: true,
      repeat: -1,
      rotate: 360,
    });
  }, []);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 750 500" {...props}>
      <defs>
        <radialGradient
          id="prefix__Degradado_sin_nombre_11"
          cx={434.33}
          cy={251.33}
          r={413.67}
          gradientTransform="matrix(1 0 0 .6 0 99.8)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#a2cdf7" />
          <stop offset={0.15} stopColor="#9dcbf6" />
          <stop offset={0.32} stopColor="#8fc7f3" />
          <stop offset={0.51} stopColor="#77bfee" />
          <stop offset={0.71} stopColor="#56b5e7" />
          <stop offset={0.91} stopColor="#2ba8de" />
          <stop offset={1} stopColor="#16a1d9" />
        </radialGradient>
        <linearGradient
          id="prefix__Degradado_sin_nombre_586"
          x1={301.87}
          y1={82.67}
          x2={304.05}
          y2={90.75}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#eaf3f4" />
          <stop offset={0.43} stopColor="#e7f1f3" />
          <stop offset={0.73} stopColor="#deecee" />
          <stop offset={0.99} stopColor="#cfe3e6" />
          <stop offset={1} stopColor="#cee2e5" />
        </linearGradient>
        <style>
          {
            ".prefix__cls-3{fill:#b0cf6d}.prefix__cls-4{fill:#6faf30}.prefix__cls-5{fill:#93bf56}.prefix__cls-6{fill:#dcecf4}.prefix__cls-7{fill:#ccdde9}.prefix__cls-8{fill:#fff}.prefix__cls-9{fill:#959fb5}.prefix__cls-10{fill:#b1becf}.prefix__cls-11{fill:#fefff3}.prefix__cls-12{fill:#f7f3d6}.prefix__cls-13{fill:#d7b7a0}.prefix__cls-14{fill:#a6d14a}.prefix__cls-15{fill:#cbd1d8}.prefix__cls-16{fill:#f5fafd}.prefix__cls-17{fill:#fdffff}.prefix__cls-18{fill:#d5dce5}.prefix__cls-19{fill:#7d91a0}.prefix__cls-20{fill:#9eb0ba}.prefix__cls-102,.prefix__cls-21{fill:none}.prefix__cls-21{stroke:#7d91a0;stroke-width:.13px;stroke-linecap:round}.prefix__cls-102,.prefix__cls-21{stroke-miterlimit:10}.prefix__cls-22{fill:#cfd3d3}.prefix__cls-23{fill:#173246}.prefix__cls-24{fill:#1f3950}.prefix__cls-25{fill:#304b62}.prefix__cls-26{fill:#628da8}.prefix__cls-27{fill:#406784}.prefix__cls-28{fill:#f06272}.prefix__cls-29{fill:#24536d}.prefix__cls-30{fill:#8db3cd}.prefix__cls-31{fill:#b3cede}.prefix__cls-32{fill:#f5fcae;opacity:.15}.prefix__cls-33{fill:#395d72}.prefix__cls-34{fill:#513d59}.prefix__cls-35{fill:#402e49}.prefix__cls-36{fill:#2b1c33}.prefix__cls-37{fill:#203850}.prefix__cls-38{fill:#f77c96}.prefix__cls-39{fill:#9d3d4b}.prefix__cls-40{fill:#91b3d8}.prefix__cls-41{fill:#536d84}.prefix__cls-42{fill:#ce3225}.prefix__cls-43{fill:#ff99b1}.prefix__cls-44{fill:#b2d7f9}.prefix__cls-45{fill:#ad1e17}.prefix__cls-46{fill:#e8612d}.prefix__cls-47{fill:#e5b52e}.prefix__cls-48{fill:#eee2c7}.prefix__cls-49{fill:#f9f6de}.prefix__cls-50{fill:#6c757c}.prefix__cls-51{fill:#34283a}.prefix__cls-52{fill:#8cba9e}.prefix__cls-53{fill:#61262c}.prefix__cls-54{fill:#2d313f;opacity:.3}.prefix__cls-54,.prefix__cls-77{mix-blend-mode:multiply}.prefix__cls-55{fill:#3b5263}.prefix__cls-56{fill:#cf5362}.prefix__cls-57{fill:#9dafc7}.prefix__cls-61{fill:#6d86a2}.prefix__cls-62{fill:#3e596d}.prefix__cls-63{fill:#6386a5}.prefix__cls-64{fill:#334c5b}.prefix__cls-65{fill:#792d37}.prefix__cls-66{fill:#e0babd}.prefix__cls-67{fill:#737d8e}.prefix__cls-68{fill:#44171f}.prefix__cls-69{fill:#4aa867}.prefix__cls-70{fill:#56ba6d}.prefix__cls-72{fill:#b7937b}.prefix__cls-75{fill:#507287}.prefix__cls-76{fill:#a4cbed}.prefix__cls-77{fill:#bfd2d8}.prefix__cls-78{fill:#333a4c}.prefix__cls-79{fill:#718090}.prefix__cls-80{fill:#4c5866}.prefix__cls-83{fill:#616d7e}.prefix__cls-84{fill:#4a5365}.prefix__cls-86{fill:#e6354b}.prefix__cls-87{font-size:6.57px}.prefix__cls-103,.prefix__cls-87{fill:#002030}.prefix__cls-87{font-family:Aller}.prefix__cls-90{letter-spacing:0}.prefix__cls-92{letter-spacing:-.01em}.prefix__cls-94{letter-spacing:0}.prefix__cls-102{stroke:#002030;stroke-width:.75px}.prefix__cls-104{letter-spacing:.01em}.prefix__cls-107{letter-spacing:-.01em}.prefix__cls-111{letter-spacing:.02em}.prefix__cls-125{letter-spacing:-.01em}.prefix__cls-126{letter-spacing:.3em}.prefix__cls-128{letter-spacing:-.01em}.prefix__cls-129{letter-spacing:.01em}.prefix__cls-130{letter-spacing:0}.prefix__cls-132{letter-spacing:.19em}.prefix__cls-134{letter-spacing:-.01em}.prefix__cls-136{letter-spacing:0}.prefix__cls-138{letter-spacing:-.01em}.prefix__cls-139,.prefix__cls-140{letter-spacing:.07em}.prefix__cls-142,.prefix__cls-143{letter-spacing:.04em}.prefix__cls-144{letter-spacing:-.05em}"
          }
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <path fill="url(#prefix__Degradado_sin_nombre_11)" d="M0 0h750v500H0z" id="prefix__Background" />
        <g id="prefix__objects">
          <path className="prefix__cls-3" d="M303.17 436.13 112.26 325.9 542.83 77.31l190.92 110.23-430.58 248.59z" />
          <path className="prefix__cls-4" d="M112.26 325.9v9.39l190.91 110.22v-9.38L112.26 325.9z" />
          <path className="prefix__cls-5" d="M733.75 187.54v9.38L303.17 445.51v-9.38l430.58-248.59z" />
          <path className="prefix__cls-3" d="m636.26 407.99-146.23-84.43-109.67 63.32 146.23 84.43 109.67-63.32z" />
          <path className="prefix__cls-4" d="M384.42 389.23v9.38l142.17 82.08v-9.38l-142.17-82.08z" />
          <path className="prefix__cls-5" d="m526.59 471.31 109.67-63.32v9.38l-109.67 63.32v-9.38z" />
          <path className="prefix__cls-3" d="M457.53 131.25 311.3 46.82l-109.68 63.32 146.24 84.43 109.67-63.32z" />
          <path className="prefix__cls-4" d="M201.62 110.14v9.39l134.05 77.39 8.12-4.69-142.17-82.09z" />
          <path className="prefix__cls-6" d="m197.56 375.15 430.57-248.59 32.5 18.76-430.57 248.6-32.5-18.77z" />
          <path className="prefix__cls-6" d="m392.54 267.27-65-37.52-28.36 16.36 64.99 37.52 28.37-16.36z" />
          <path
            className="prefix__cls-6"
            d="m372.23 269.62 72.98-42.14-56.88-32.82-72.97 42.13 56.87 32.83zm203.1 173.55L343.79 309.49l-32.49 18.75 231.54 133.68 32.49-18.75zm-85.31-232.18L258.49 77.31 226 96.07l231.53 133.68 32.49-18.76z"
          />
          <path className="prefix__cls-7" d="M197.56 375.15v9.39l32.5 18.76v-9.38l-32.5-18.77z" />
          <path
            className="prefix__cls-8"
            d="m215.33 383.07 4.06-2.34 1.02.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.34 1.01.58-4.06 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.07 2.34-1.01-.58zm8.12-4.69 4.07-2.35 1.01.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.69 4.06-2.35 1.02.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.01.59-4.06 2.34-1.01-.58zm8.12-4.69 4.06-2.35 1.02.59-4.06 2.34-1.02-.58zm8.12-4.69 4.07-2.35 1.01.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.69 4.06-2.35 1.02.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.01.59-4.06 2.34-1.01-.58zm8.12-4.7 4.06-2.34 1.02.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.34 1.01.58-4.06 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.07 2.35-1.01-.59zm8.12-4.69 4.07-2.34 1.01.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.34 1.02.58-4.07 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.34 1.01.58-4.06 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.06 2.35-1.02-.59zm8.12-4.69 4.07-2.34 1.01.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.69 4.07-2.35 1.01.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.01.59-4.06 2.34-1.01-.58zm8.12-4.69 4.06-2.35 1.02.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.01.59-4.06 2.34-1.01-.58zm8.12-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.69 4.07-2.35 1.01.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.7 4.07-2.34 1.01.59-4.06 2.34-1.02-.59zm8.13-4.69 4.06-2.34 1.01.59-4.06 2.34-1.01-.59zm8.12-4.69 4.06-2.34 1.02.59-4.06 2.34-1.02-.59zm8.13-4.69 4.06-2.34 1.01.58-4.06 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.07 2.35-1.01-.59zm8.12-4.69 4.07-2.34 1.01.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.34 1.01.58-4.06 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.34 1.01.58-4.06 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.06 2.35-1.02-.59zm8.12-4.69 4.07-2.35 1.01.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.69 4.06-2.35 1.02.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.01.59-4.06 2.34-1.01-.58zm8.12-4.69 4.06-2.35 1.02.59-4.06 2.34-1.02-.58zm8.12-4.69 4.07-2.35 1.01.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.69 4.07-2.35 1.01.59-4.06 2.34-1.02-.58zm8.13-4.69 4.06-2.35 1.02.59-4.07 2.34-1.01-.58zm8.12-4.7 4.06-2.34 1.02.59-4.06 2.34-1.02-.59zm8.13-4.69 4.06-2.34 1.01.58-4.06 2.35-1.01-.59zm8.12-4.69 4.06-2.34 1.02.58-4.06 2.35-1.02-.59zm8.12-4.69 4.07-2.34 1.01.58-4.06 2.35-1.02-.59zm8.13-4.69 4.06-2.34 1.02.58-4.07 2.35-1.01-.59zM363.09 274.9l-6.09-3.52-2.04 1.17v-3.52h6.1l-2.03 1.18 6.09 3.52-2.03 1.17zm11.17-9.97-6.09-3.52-2.04 1.17 6.1 3.52-2.04 1.17h6.1v-3.51l-2.03 1.17zm182.27 186.74-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.12-4.69-4.06-2.35 1.02-.59 4.06 2.35-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.59 4.07 2.35-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.59 4.06 2.35-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.59 4.07 2.35-1.03.59zm-8.12-4.7-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.12-4.69-4.06-2.34 1.01-.59 4.07 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zM442.8 386l-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.06-2.34 1.01-.59 4.07 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.34 1.02-.59 4.06 2.34-1.02.59zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.12-4.69-4.06-2.35 1.01-.58 4.07 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm121.91-112.56-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.59 4.06 2.35-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.59 4.07 2.35-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.59 4.07 2.35-1.03.59zm-8.12-4.69-4.05-2.35 1.01-.59 4.07 2.35-1.03.59zm-8.12-4.7-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.06-2.34 1.02-.59 4.06 2.35-1.02.58zm-8.13-4.69-4.05-2.34 1.01-.59 4.07 2.35-1.03.58zm-8.12-4.69-4.05-2.34 1.01-.59 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.01-.58 4.07 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.12-4.69-4.06-2.35 1.01-.58 4.07 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.12-4.69-4.06-2.35 1.02-.58 4.06 2.34-1.02.59zm-8.13-4.69-4.05-2.35 1.01-.58 4.07 2.34-1.03.59zm-8.17-4.71-4.06-2.34 1.02-.59 4.06 2.35-1.02.58z"
          />

          <path className="prefix__cls-9" d="m360.04 126.56-.62-.36 8.15-4.69.6.36-8.13 4.69z" />
          <path className="prefix__cls-7" d="m542.83 460.75-210.2-121.37-5.22 3.02 210.21 121.36 5.21-3.01z" />
          <path className="prefix__cls-9" d="M327.41 342.4v1.16l210.21 121.38v-1.18L327.41 342.4z" />
          <path className="prefix__cls-10" d="m537.62 463.76 5.21-3.01v1.18l-5.21 3.01v-1.18z" />
          <path className="prefix__cls-6" d="m481.9 324.68 33.53-19.29-44.68-25.8-33.55 19.31 44.7 25.78z" />
          <path className="prefix__cls-11" d="m185.37 349.36-44.67-25.8 44.67-25.79 44.69 25.79-44.69 25.8z" />
          <path className="prefix__cls-12" d="m140.7 323.56 44.67 25.8v1.18l-44.67-25.81v-1.17z" />
          <path className="prefix__cls-13" d="m230.06 323.56-44.69 25.8v1.18l44.69-25.81v-1.17z" />
          <path className="prefix__cls-11" d="m270.68 314.18-52.81-30.49 52.8-30.49 52.81 30.48-52.8 30.5z" />
          <path className="prefix__cls-12" d="m217.87 283.69 52.81 30.49v1.18l-52.81-30.51v-1.16z" />
          <path className="prefix__cls-13" d="m323.48 283.68-52.8 30.5v1.18l52.8-30.51v-1.17z" />
          <path className="prefix__cls-11" d="m295.05 422.06-44.68-25.8 85.3-49.25 44.69 25.79-85.31 49.26z" />
          <path className="prefix__cls-12" d="m250.37 396.26 44.68 25.8v1.17l-44.68-25.8v-1.17z" />
          <path className="prefix__cls-13" d="m380.36 372.8-85.31 49.26v1.17l85.31-49.26v-1.17z" />
          <path className="prefix__cls-11" d="m437.21 349.35-44.67-25.79 44.68-25.8 44.68 25.77-44.69 25.82z" />
          <path className="prefix__cls-12" d="m392.54 323.56 44.67 25.79v1.18l-44.67-25.8v-1.17z" />
          <path className="prefix__cls-13" d="m481.9 323.53-44.69 25.82v1.18l44.69-25.85v-1.15z" />
          <path className="prefix__cls-11" d="m526.58 297.73-52.81-30.46 109.67-63.32 52.81 30.46-109.67 63.32z" />
          <path className="prefix__cls-12" d="m473.77 267.27 52.81 30.46v1.18l-52.81-30.47v-1.17z" />
          <path className="prefix__cls-13" d="m636.25 234.41-109.67 63.32v1.18l109.67-63.35v-1.15z" />
          <path className="prefix__cls-11" d="m685 210.99-60.92-35.18 36.55-21.1 60.93 35.17L685 210.99z" />
          <path className="prefix__cls-12" d="M624.08 175.81 685 210.99v1.18l-60.92-35.19v-1.17z" />
          <path className="prefix__cls-13" d="M721.56 189.88 685 210.99v1.18l36.56-21.13v-1.16z" />
          <path className="prefix__cls-11" d="m575.33 152.35-77.18-44.55 44.67-25.79 77.19 44.55-44.68 25.79z" />
          <path className="prefix__cls-12" d="m498.15 107.8 77.18 44.55v1.17l-77.18-44.55v-1.17z" />
          <path className="prefix__cls-13" d="m620.01 126.56-44.68 25.79v1.17l44.68-25.81v-1.15z" />
          <path className="prefix__cls-11" d="m404.73 142.98-93.42-53.93 32.48-18.76 93.43 53.93-32.49 18.76z" />
          <path className="prefix__cls-12" d="m311.31 89.05 93.42 53.93v1.18l-93.42-53.94v-1.17z" />
          <path className="prefix__cls-13" d="m437.22 124.22-32.49 18.76v1.18l32.49-18.79v-1.15z" />
          <path className="prefix__cls-11" d="m387.47 301.84 33.5 19.35 12.19-7.01-33.54-19.36-12.15 7.02z" />
          <path className="prefix__cls-12" d="m387.47 301.84 33.5 19.35v1.17L387.47 303v-1.16z" />
          <path className="prefix__cls-11" d="m201.62 339.98 27.42 15.83 12.18-7.04-27.41-15.83-12.19 7.04z" />
          <path className="prefix__cls-13" d="M241.22 348.77v1.17l-12.18 7.04v-1.17l12.18-7.04z" />
          <path className="prefix__cls-12" d="m201.62 341.15 27.42 15.83v-1.17l-27.42-15.83v1.17z" />
          <path className="prefix__cls-11" d="m290.99 302.45 15.23 8.82 14.22-8.25-15.24-8.77-14.21 8.2z" />
          <path className="prefix__cls-12" d="m290.99 303.63 15.23 8.79 1.01-.59-16.24-9.38v1.18z" />
          <path className="prefix__cls-13" d="M306.22 311.29v1.17l14.23-8.26v-1.18l-14.23 8.27z" />
          <path className="prefix__cls-11" d="m494.1 366.95-24.38 14.07-5.92-3.42 24.37-14.07 5.93 3.42z" />
          <path className="prefix__cls-13" d="m469.72 381.02 24.38-14.07v1.17l-24.38 14.07v-1.17z" />
          <path className="prefix__cls-12" d="m463.8 377.6 5.92 3.42v1.17l-5.92-3.42v-1.17z" />
          <path className="prefix__cls-6" d="m453.47 185.19 52.79-30.48 40.63 23.45-52.8 30.49-40.62-23.46z" />
          <path className="prefix__cls-11" d="m538.78 392.75-24.38 14.07-5.91-3.42 24.37-14.07 5.92 3.42z" />
          <path className="prefix__cls-13" d="m514.4 406.82 24.38-14.07v1.17l-24.38 14.07v-1.17z" />
          <path className="prefix__cls-12" d="m508.49 403.4 5.91 3.42v1.17l-5.91-3.42v-1.17z" />
          <path className="prefix__cls-11" d="m583.46 418.54-24.38 14.07-5.91-3.42 24.37-14.07 5.92 3.42z" />
          <path className="prefix__cls-13" d="m559.08 432.61 24.38-14.07v1.18l-24.38 14.07v-1.18z" />
          <path className="prefix__cls-12" d="m553.17 429.19 5.91 3.42v1.18l-5.91-3.42v-1.18z" />
          <path className="prefix__cls-6" d="m578.37 155.29-80.22-46.32-23.46 13.43 80.33 46.38 23.35-13.49z" />
          <path className="prefix__cls-13" d="m529.52 121.22-3.95 3.58v-1.17l3.95-2.41z" />
          <path className="prefix__cls-11" d="m529.52 121.22-3.95 3.58 20.31 11.73v-1.17l3.95-2.41-20.31-11.73z" />
          <path
            className="prefix__cls-13"
            d="m372.23 124.2-15.25 8.81v1.17l15.25-8.8v-1.18zm-28.44-16.41-15.24 8.8v1.17l15.24-8.79v-1.18z"
          />
          <path className="prefix__cls-11" d="m372.23 124.2-28.44-16.41-15.24 8.8 28.43 16.42 15.25-8.81z" />
          <path className="prefix__cls-12" d="m356.98 133.01-28.43-16.42v1.17l28.43 16.42v-1.17z" />
          <path
            className="prefix__cls-11"
            d="m648.45 189.88-8.13 4.69-33.52-19.35-12.19 7.03 45.71 26.4 20.31-11.73-12.18-7.04z"
          />
          <path className="prefix__cls-12" d="M594.61 182.25v1.19l45.71 26.34v-1.13l-45.71-26.4z" />
          <path className="prefix__cls-13" d="M640.32 209.78v-1.13l20.31-11.73v1.17l-20.06 11.69" />
          <path
            className="prefix__cls-8"
            d="m492.08 168.81 23.31 13.47-1.01.58-23.33-13.47 1.03-.58zm-8.12 4.68 23.31 13.48-1.01.58-23.32-13.47 1.02-.59zm-8.12 4.69 23.31 13.47-1.01.58-23.32-13.47 1.02-.58zm-8.11 4.68 23.31 13.48-1.01.58-23.33-13.47 1.03-.59z"
          />
          <path
            className="prefix__cls-8"
            d="m492.08 168.81-1.02-.59-25.41 14.66 1.05.59 25.38-14.66zm-26.42 126.62-12.17 7.03 1 .59 12.2-7.04-1.03-.58zm8.12 4.68-12.18 7.04 1.01.58 12.2-7.03-1.03-.59zm8.12 4.69-12.18 7.03 1.01.59 12.2-7.04-1.03-.58zm8.12 4.68-12.18 7.04 1.01.58 12.2-7.03-1.03-.59z"
          />
          <path
            className="prefix__cls-8"
            d="m477.84 288.4-12.18 7.04 1.01.58 12.2-7.03-1.03-.59zm8.12 4.68-12.18 7.04 1.01.58 12.2-7.03-1.03-.59zm8.12 4.69-12.18 7.04 1.01.58 12.19-7.03-1.02-.59zm8.11 4.68-12.17 7.04 1.01.58 12.19-7.03-1.03-.59z"
          />
          <path className="prefix__cls-8" d="m465.66 295.43 1.02-.59 25.41 14.66-1.04.59-25.39-14.66z" />
          <path className="prefix__cls-7" d="m315.24 300.01 39.58-22.84 5.22 3-39.59 22.85-5.21-3.01z" />
          <path className="prefix__cls-10" d="M360.04 280.17v1.18l-39.59 22.85v-1.18l39.59-22.85z" />
          <path className="prefix__cls-7" d="m192.35 370.97 31.47-18.17 5.22 3.01-31.48 18.17-5.21-3.01z" />
          <path className="prefix__cls-10" d="M229.04 355.81v1.17l-31.48 18.17v-1.17l31.48-18.17z" />
          <path className="prefix__cls-9" d="m197.56 373.98-5.21-3.01v1.18l5.21 3v-1.17z" />
          <path className="prefix__cls-7" d="m383.26 260.75 64.99-37.53 5.21 3.01-64.98 37.53-5.22-3.01z" />
          <path className="prefix__cls-10" d="m453.46 226.23.01 1.18-64.99 37.52v-1.17l64.98-37.53z" />
          <path className="prefix__cls-9" d="m388.48 263.76-5.22-3.01v1.17l5.22 3.01v-1.17z" />
          <path className="prefix__cls-7" d="m360.04 317.7 27.47-15.83 5.22 3.01-27.48 15.83-5.21-3.01z" />
          <path className="prefix__cls-10" d="M392.73 304.88v1.18l-27.48 15.82v-1.17l27.48-15.83z" />
          <path className="prefix__cls-9" d="m365.25 320.71-5.21-3.01v1.17l5.21 3.01v-1.17z" />
          <path className="prefix__cls-7" d="m230.06 392.74 97.36-56.36 5.21 3.01-97.36 56.36-5.21-3.01z" />
          <path className="prefix__cls-10" d="M332.63 339.39v1.17l-97.36 56.37v-1.18l97.36-56.36z" />
          <path className="prefix__cls-9" d="m235.27 395.75-5.21-3.01v1.18l5.21 3.01v-1.18z" />
          <path className="prefix__cls-7" d="m537.62 171.63 12.18-7.04 5.22 3.01-12.19 7.04-5.21-3.01z" />
          <path className="prefix__cls-10" d="M555.02 167.6v1.18l-12.19 7.03v-1.17l12.19-7.04z" />
          <path className="prefix__cls-9" d="m542.83 174.64-5.21-3.01v1.17l5.21 3.01v-1.17z" />
          <path className="prefix__cls-7" d="m573.16 151.11 49.76-28.73 5.21 3.01-49.76 28.73-5.21-3.01z" />
          <path className="prefix__cls-10" d="m628.13 125.39.01 1.17-49.77 28.73v-1.17l49.76-28.73z" />
          <path className="prefix__cls-9" d="m578.37 154.12-5.21-3.01v1.17l5.21 3.01v-1.17z" />
          <path className="prefix__cls-7" d="m606.8 175.22 53.83-31.09 5.22 3.01-53.83 31.09-5.22-3.01z" />
          <path className="prefix__cls-10" d="M665.85 147.14v1.17l-52.82 30.51-1.01-.59 53.83-31.09z" />
          <path className="prefix__cls-7" d="m399.62 294.82 194.99-112.57 5.22 3.01-195 112.57-5.21-3.01z" />
          <path className="prefix__cls-10" d="M599.83 185.26v1.18L405.85 298.42l-1.02-.59 195-112.57z" />
          <path className="prefix__cls-7" d="m469.01 374.59-98.59-56.92-5.22 3.02 98.6 56.91 5.21-3.01z" />
          <path className="prefix__cls-9" d="M365.2 320.69v1.16l98.6 56.92v-1.17l-98.6-56.91z" />
          <path className="prefix__cls-7" d="m513.7 400.39-38.77-22.38-5.21 3.01 38.77 22.38 5.21-3.01z" />
          <path className="prefix__cls-9" d="M469.72 381.02v1.17l38.77 22.38v-1.17l-38.77-22.38z" />
          <path className="prefix__cls-7" d="m558.38 426.19-38.77-22.39-5.22 3.02 38.77 22.38 5.22-3.01z" />
          <path className="prefix__cls-9" d="M514.39 406.82v1.17l38.77 22.38v-1.17l-38.77-22.38z" />
          <path
            className="prefix__cls-7"
            d="M448.25 223.22 225.99 94.91l-5.21 3.01 222.26 128.32 5.21-3.02zM333.77 113.58 263.7 73.13l-5.21 3.02 70.07 40.44 5.21-3.01z"
          />
          <path className="prefix__cls-9" d="M258.49 76.15v1.16l70.07 40.45v-1.17l-70.07-40.44z" />
          <path className="prefix__cls-7" d="M236.01 345.76 301 308.28l5.22 3.01-65 37.48-5.21-3.01z" />
          <path className="prefix__cls-10" d="M306.22 311.29v1.17l-65 37.48v-1.17l65-37.48z" />
          <path className="prefix__cls-7" d="m580.58 438.98-16.28-9.37-5.22 3.01 16.28 9.38 5.22-3.02z" />
          <path className="prefix__cls-9" d="M559.08 432.62v1.17l16.28 9.38V442l-16.28-9.38z" />
          <path className="prefix__cls-10" d="M580.58 438.98v1.16l-5.22 3.03V442l5.22-3.02z" />
          <path className="prefix__cls-7" d="M491.17 204.46 362.2 130l-5.22 3.01 128.98 74.46 5.21-3.01z" />
          <path className="prefix__cls-9" d="M356.98 133.01v1.17l128.98 74.47v-1.18l-128.98-74.46z" />
          <path className="prefix__cls-10" d="m485.96 207.47 5.21-3.01v1.18l-5.21 3.01v-1.18z" />
          <path className="prefix__cls-4" d="M513.76 364.82a3.41 3.41 0 1 1 3.41 3.41 3.41 3.41 0 0 1-3.41-3.41z" />
          <path
            className="prefix__cls-14"
            d="M520.58 364.75a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-4" d="M508.82 367.55a3.42 3.42 0 1 1 3.42 3.42 3.42 3.42 0 0 1-3.42-3.42z" />
          <path
            className="prefix__cls-14"
            d="M515.65 367.48a3.41 3.41 0 0 0-3.41-3.34H512a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-4" d="M503.89 370.29a3.42 3.42 0 1 1 3.41 3.41 3.42 3.42 0 0 1-3.41-3.41z" />
          <path
            className="prefix__cls-14"
            d="M510.71 370.21a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 0 0 1.22 5 2.62 2.62 0 0 0 2.43-1.66z"
          />
          <circle className="prefix__cls-4" cx={502.37} cy={373.02} r={3.41} />
          <path
            className="prefix__cls-14"
            d="M505.78 373a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 0 0 1.21 5 2.66 2.66 0 0 0 2.44-1.66z"
          />
          <path className="prefix__cls-4" d="M494 375.75a3.42 3.42 0 1 1 3.41 3.42 3.41 3.41 0 0 1-3.41-3.42z" />
          <path
            className="prefix__cls-14"
            d="M500.84 375.68a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-4" d="M489.08 378.49a3.42 3.42 0 1 1 3.42 3.41 3.41 3.41 0 0 1-3.42-3.41z" />
          <path
            className="prefix__cls-14"
            d="M495.91 378.42a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 0 0 1.21 5 2.66 2.66 0 0 0 2.44-1.66z"
          />
          <path className="prefix__cls-4" d="M484.15 381.22a3.42 3.42 0 1 1 3.41 3.42 3.41 3.41 0 0 1-3.41-3.42z" />
          <path className="prefix__cls-14" d="M491 381.15a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z" />
          <path className="prefix__cls-15" d="M488.88 385.2v-4l.57-1.17.57.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m488.88 381.2-.28-.16v3.99l.28.17v-4z" />
          <path className="prefix__cls-17" d="m489.45 380.03-.29-.17-.56 1.18.28.16.57-1.17z" />
          <path className="prefix__cls-15" d="M491.8 383.51v-4l.57-1.16.57.51v3.99l-1.14.66z" />
          <path className="prefix__cls-16" d="m491.8 379.51-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m492.37 378.35-.29-.18-.57 1.18.29.16.57-1.16z" />
          <path className="prefix__cls-15" d="M494.72 381.83v-4l.57-1.17.57.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m494.72 377.83-.28-.17v4l.28.17v-4z" />
          <path className="prefix__cls-17" d="m495.29 376.66-.29-.17-.56 1.17.28.17.57-1.17z" />
          <path className="prefix__cls-15" d="M497.64 380.14v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m497.64 376.14-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m498.2 374.97-.28-.17-.57 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-15" d="M500.56 378.46v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m500.56 374.46-.29-.17v4l.29.17v-4z" />
          <path className="prefix__cls-17" d="m501.12 373.29-.28-.17-.57 1.17.29.17.56-1.17z" />
          <path className="prefix__cls-15" d="M503.48 376.77v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m503.48 372.77-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m504.04 371.6-.28-.17-.57 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-15" d="M506.4 375.09v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m506.4 371.09-.29-.17v4l.29.17v-4z" />
          <path className="prefix__cls-17" d="m506.96 369.92-.28-.17-.57 1.17.29.17.56-1.17z" />
          <path className="prefix__cls-15" d="M509.32 373.4v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m509.32 369.4-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m509.88 368.23-.28-.17-.57 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-15" d="M512.24 371.72v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m512.24 367.72-.29-.17v4l.29.17v-4z" />
          <path className="prefix__cls-17" d="m512.8 366.55-.28-.17-.57 1.17.29.17.56-1.17z" />
          <path className="prefix__cls-15" d="M515.16 370.03v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m515.16 366.03-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m515.72 364.86-.29-.17-.56 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-18" d="m487.68 382.64 29.73-17.17v.48l-29.73 17.17v-.48z" />
          <path className="prefix__cls-16" d="m487.68 382.64-.2-.11v.48l.2.11v-.48z" />
          <path className="prefix__cls-17" d="m517.41 365.47-29.73 17.17-.2-.11 29.74-17.17.19.11z" />
          <path className="prefix__cls-18" d="m487.68 384.27 29.73-17.16v.47l-29.73 17.17v-.48z" />
          <path className="prefix__cls-16" d="m487.68 384.27-.2-.1v.47l.2.11v-.48z" />
          <path className="prefix__cls-17" d="m517.41 367.11-29.73 17.16-.2-.1L517.22 367l.19.11z" />
          <path className="prefix__cls-16" d="m488.6 382.4.28.16" />
          <path className="prefix__cls-4" d="M603.12 416.41a3.42 3.42 0 1 1 3.42 3.42 3.42 3.42 0 0 1-3.42-3.42z" />
          <path className="prefix__cls-14" d="M610 416.34a3.41 3.41 0 0 0-3.41-3.34h-.25a2.63 2.63 0 1 0 3.66 3.33z" />
          <path className="prefix__cls-4" d="M598.19 419.15a3.42 3.42 0 1 1 3.41 3.41 3.42 3.42 0 0 1-3.41-3.41z" />
          <path className="prefix__cls-14" d="M605 419.07a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z" />
          <path className="prefix__cls-4" d="M593.25 421.88a3.42 3.42 0 1 1 3.42 3.41 3.42 3.42 0 0 1-3.42-3.41z" />
          <path
            className="prefix__cls-14"
            d="M600.08 421.81a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 0 0 1.21 5 2.66 2.66 0 0 0 2.44-1.66z"
          />
          <path className="prefix__cls-4" d="M588.32 424.61a3.42 3.42 0 1 1 3.41 3.42 3.41 3.41 0 0 1-3.41-3.42z" />
          <path
            className="prefix__cls-14"
            d="M595.14 424.54a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-4" d="M583.38 427.35a3.42 3.42 0 1 1 3.42 3.41 3.42 3.42 0 0 1-3.42-3.41z" />
          <path
            className="prefix__cls-14"
            d="M590.21 427.28a3.41 3.41 0 0 0-3.41-3.35h-.24a2.63 2.63 0 0 0 1.21 5 2.66 2.66 0 0 0 2.44-1.65z"
          />
          <path className="prefix__cls-4" d="M578.45 430.08a3.42 3.42 0 1 1 3.41 3.42 3.41 3.41 0 0 1-3.41-3.42z" />
          <path className="prefix__cls-14" d="M585.27 430a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z" />
          <path className="prefix__cls-4" d="M573.51 432.82a3.42 3.42 0 1 1 3.42 3.41 3.42 3.42 0 0 1-3.42-3.41z" />
          <path
            className="prefix__cls-14"
            d="M580.34 432.74a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-15" d="M578.25 436.79v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m578.25 432.79-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m578.81 431.62-.28-.17-.57 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-15" d="M581.17 435.11v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m581.17 431.11-.29-.17v4l.29.17v-4z" />
          <path className="prefix__cls-17" d="m581.73 429.94-.28-.17-.57 1.17.29.17.56-1.17z" />
          <path className="prefix__cls-15" d="M584.09 433.42v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m584.09 429.42-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m584.65 428.25-.28-.17-.57 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-15" d="M587 431.74v-4l.57-1.17.58.51v4l-1.15.66z" />
          <path className="prefix__cls-16" d="m587 427.74-.28-.17v4l.28.17v-4z" />
          <path className="prefix__cls-17" d="m587.57 426.57-.29-.17-.56 1.17.28.17.57-1.17z" />
          <path className="prefix__cls-15" d="M589.92 430.05v-4l.57-1.17.58.51v4l-1.15.66z" />
          <path className="prefix__cls-16" d="m589.92 426.05-.28-.16v4l.28.16v-4z" />
          <path className="prefix__cls-17" d="m590.49 424.88-.29-.17-.56 1.18.28.16.57-1.17z" />
          <path className="prefix__cls-15" d="M592.84 428.37v-4l.57-1.17.58.51v4l-1.15.66z" />
          <path className="prefix__cls-16" d="m592.84 424.37-.28-.17v4l.28.17v-4z" />
          <path className="prefix__cls-17" d="m593.41 423.2-.29-.18-.56 1.18.28.17.57-1.17z" />
          <path className="prefix__cls-15" d="M595.76 426.68v-4l.57-1.17.57.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m595.76 422.68-.28-.16v4l.28.16v-4z" />
          <path className="prefix__cls-17" d="m596.33 421.51-.29-.17-.56 1.18.28.16.57-1.17z" />
          <path className="prefix__cls-15" d="M598.68 425v-4l.57-1.17.57.51v3.99l-1.14.67z" />
          <path className="prefix__cls-16" d="m598.68 421-.28-.17v4l.28.17v-4z" />
          <path className="prefix__cls-17" d="m599.25 419.83-.29-.18-.56 1.18.28.17.57-1.17z" />
          <path className="prefix__cls-15" d="M601.6 423.31v-4l.57-1.17.57.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m601.6 419.31-.28-.16v3.99l.28.17v-4z" />
          <path className="prefix__cls-17" d="m602.17 418.14-.29-.17-.56 1.18.28.16.57-1.17z" />
          <path className="prefix__cls-15" d="M604.52 421.63v-4l.57-1.18.57.52v3.99l-1.14.67z" />
          <path className="prefix__cls-16" d="m604.52 417.63-.28-.17v4l.28.17v-4z" />
          <path className="prefix__cls-17" d="m605.09 416.45-.29-.17-.56 1.18.28.17.57-1.18z" />
          <path className="prefix__cls-18" d="m577.04 434.23 29.73-17.16v.47l-29.73 17.17v-.48z" />
          <path className="prefix__cls-16" d="m577.04 434.23-.19-.11v.48l.19.11v-.48z" />
          <path className="prefix__cls-17" d="m606.77 417.07-29.73 17.16-.19-.11 29.73-17.16.19.11z" />
          <path className="prefix__cls-18" d="m577.04 435.87 29.73-17.17v.48l-29.73 17.16v-.47z" />
          <path className="prefix__cls-16" d="m577.04 435.87-.19-.11v.47l.19.11v-.47z" />
          <path className="prefix__cls-17" d="m606.77 418.7-29.73 17.17-.19-.11 29.73-17.17.19.11z" />
          <path className="prefix__cls-16" d="m577.96 433.99.29.16" />
          <path className="prefix__cls-4" d="M558.44 390.62a3.42 3.42 0 1 1 3.42 3.41 3.42 3.42 0 0 1-3.42-3.41z" />
          <path
            className="prefix__cls-14"
            d="M565.27 390.54a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 0 0 1.21 5 2.65 2.65 0 0 0 2.44-1.66z"
          />
          <path className="prefix__cls-4" d="M553.51 393.35a3.42 3.42 0 1 1 3.41 3.42 3.41 3.41 0 0 1-3.41-3.42z" />
          <path
            className="prefix__cls-14"
            d="M560.33 393.28a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-4" d="M548.57 396.09a3.42 3.42 0 1 1 3.43 3.41 3.42 3.42 0 0 1-3.43-3.41z" />
          <path className="prefix__cls-14" d="M555.4 396a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.34z" />
          <path className="prefix__cls-4" d="M543.64 398.82a3.42 3.42 0 1 1 3.41 3.41 3.41 3.41 0 0 1-3.41-3.41z" />
          <path
            className="prefix__cls-14"
            d="M550.46 398.75a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-4" d="M538.71 401.55a3.41 3.41 0 1 1 3.41 3.42 3.41 3.41 0 0 1-3.41-3.42z" />
          <path
            className="prefix__cls-14"
            d="M545.53 401.48a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.33z"
          />
          <path className="prefix__cls-4" d="M533.77 404.29a3.42 3.42 0 1 1 3.41 3.41 3.42 3.42 0 0 1-3.41-3.41z" />
          <path
            className="prefix__cls-14"
            d="M540.59 404.21a3.41 3.41 0 0 0-3.41-3.34h-.24a2.63 2.63 0 1 0 3.65 3.32z"
          />
          <path className="prefix__cls-4" d="M528.84 407a3.41 3.41 0 1 1 3.41 3.42 3.41 3.41 0 0 1-3.41-3.42z" />
          <path className="prefix__cls-14" d="M535.66 407a3.41 3.41 0 0 0-3.41-3.34H532a2.63 2.63 0 1 0 3.65 3.33z" />
          <path className="prefix__cls-15" d="M533.57 411v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m533.57 407-.29-.17v4l.29.17v-4z" />
          <path className="prefix__cls-17" d="m534.13 405.83-.28-.17-.57 1.17.29.17.56-1.17z" />
          <path className="prefix__cls-15" d="M536.49 409.31v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m536.49 405.31-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m537.05 404.14-.28-.17-.57 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-15" d="M539.41 407.63v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m539.41 403.63-.29-.17v4l.29.17v-4z" />
          <path className="prefix__cls-17" d="m539.97 402.46-.28-.17-.57 1.17.29.17.56-1.17z" />
          <path className="prefix__cls-15" d="M542.33 405.94v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m542.33 401.94-.29-.16v4l.29.16v-4z" />
          <path className="prefix__cls-17" d="m542.89 400.77-.28-.17-.57 1.18.29.16.56-1.17z" />
          <path className="prefix__cls-15" d="M545.25 404.26v-4l.56-1.17.58.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m545.25 400.26-.29-.17v4l.29.17v-4z" />
          <path className="prefix__cls-17" d="m545.81 399.09-.29-.17-.56 1.17.29.17.56-1.17z" />
          <path className="prefix__cls-15" d="M548.16 402.57v-4l.57-1.17.58.51v4l-1.15.66z" />
          <path className="prefix__cls-16" d="m548.16 398.57-.28-.16v4l.28.16v-4z" />
          <path className="prefix__cls-17" d="m548.73 397.4-.29-.17-.56 1.18.28.16.57-1.17z" />
          <path className="prefix__cls-15" d="M551.08 400.89v-4l.57-1.17.58.51v4l-1.15.66z" />
          <path className="prefix__cls-16" d="m551.08 396.89-.28-.17v4l.28.17v-4z" />
          <path className="prefix__cls-17" d="m551.65 395.72-.29-.17-.56 1.17.28.17.57-1.17z" />
          <path className="prefix__cls-15" d="M554 399.2v-4l.57-1.17.58.51v4l-1.15.66z" />
          <path className="prefix__cls-16" d="m554 395.2-.28-.16v4l.28.16v-4z" />
          <path className="prefix__cls-17" d="m554.57 394.03-.29-.17-.56 1.18.28.16.57-1.17z" />
          <path className="prefix__cls-15" d="M556.92 397.52v-4l.57-1.17.58.51v4l-1.15.66z" />
          <path className="prefix__cls-16" d="m556.92 393.52-.28-.17v4l.28.17v-4z" />
          <path className="prefix__cls-17" d="m557.49 392.35-.29-.17-.56 1.17.28.17.57-1.17z" />
          <path className="prefix__cls-15" d="M559.84 395.83v-4l.57-1.17.57.51v4l-1.14.66z" />
          <path className="prefix__cls-16" d="m559.84 391.83-.28-.16v4l.28.16v-4z" />
          <path className="prefix__cls-17" d="m560.41 390.66-.29-.17-.56 1.18.28.16.57-1.17z" />
          <path className="prefix__cls-18" d="m532.36 408.44 29.74-17.17v.48l-29.74 17.17v-.48z" />
          <path className="prefix__cls-16" d="m532.36 408.44-.19-.11v.48l.19.11v-.48z" />
          <path className="prefix__cls-17" d="m562.1 391.27-29.74 17.17-.19-.11 29.73-17.17.2.11z" />
          <path className="prefix__cls-18" d="m532.36 410.07 29.74-17.16v.47l-29.74 17.17v-.48z" />
          <path className="prefix__cls-16" d="m532.36 410.07-.19-.11v.48l.19.11v-.48z" />
          <path className="prefix__cls-17" d="m562.1 392.91-29.74 17.16-.19-.11 29.73-17.16.2.11z" />
          <path className="prefix__cls-16" d="m533.28 408.2.29.16" />
          <path className="prefix__cls-9" d="m403.83 347.34-10.24 5.92 26.63 15.36c4.71-1.21 8-3.23 10.25-5.92z" />
          <path
            className="prefix__cls-9"
            d="m396.79 352.61 1.76-.82a5.51 5.51 0 0 0-.18-.9c-.05 0-1.12-.35-1.12-.35l-.64.89z"
          />
          <path className="prefix__cls-19" d="M428 352.06v2a.33.33 0 0 0 .23.3 12.7 12.7 0 0 0-.11-2.19z" />
          <path className="prefix__cls-20" d="M428.15 352.13V354c0 .28.17.42.41.27l.19-.11a1 1 0 0 0 .45-.77v-1.89z" />
          <path className="prefix__cls-9" d="m429.2 351.53-.12-.08-1.05.61.12.07 1.05-.6z" />
          <path className="prefix__cls-21" d="M428.68 352.73v1.87a.44.44 0 0 1-.21.37l-1 .6" />
          <path className="prefix__cls-22" d="m415.59 363.46 8.35-4.82v-12.06l-8.35 4.82v12.06z" />
          <path className="prefix__cls-9" d="m415 363.09 1.76-.81a7.28 7.28 0 0 0-.18-.91l-1.12-.35-.64.89z" />
          <path className="prefix__cls-17" d="m423.94 346.58-20.31-11.73-8.35 4.83 20.31 11.72 8.35-4.82z" />
          <path
            className="prefix__cls-23"
            d="m397.75 352.27-.37-.75.9-.52a1 1 0 0 1 1.08.09 3.73 3.73 0 0 1 1.61 3 1.32 1.32 0 0 1-.51 1.18l-.92.53-.4-.79a3.87 3.87 0 0 1-1.39-2.74z"
          />
          <path
            className="prefix__cls-24"
            d="M396.82 352.73a3.86 3.86 0 0 0 1.25 2.7 2.53 2.53 0 0 0 .35.25c.89.52 1.61 0 1.61-1.09a3.89 3.89 0 0 0-1-2.45 2.39 2.39 0 0 0-.61-.5c-.88-.52-1.6-.03-1.6 1.09z"
          />
          <path
            className="prefix__cls-25"
            d="M398.42 352.31c-.56-.33-1 0-1 .76a2.46 2.46 0 0 0 1 1.94c.57.32 1 0 1-.76a2.41 2.41 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M398 353.4a1.15 1.15 0 0 0 .43.93.26.26 0 0 0 .28 0 .51.51 0 0 0 .16-.43 1.14 1.14 0 0 0-.44-.93.24.24 0 0 0-.18 0c-.16.03-.25.16-.25.43z"
          />
          <path
            className="prefix__cls-27"
            d="M398.08 353.37a1.14 1.14 0 0 0 .44.92.28.28 0 0 0 .18 0 .51.51 0 0 0 .16-.43 1.14 1.14 0 0 0-.44-.93.24.24 0 0 0-.18 0 .51.51 0 0 0-.16.44z"
          />
          <path
            className="prefix__cls-25"
            d="M396.82 352.73a3.86 3.86 0 0 0 1.25 2.7 4.45 4.45 0 0 1-1-2c-.14-.64-.09-1.57.47-1.8s1.28.26 1.51.48a2.39 2.39 0 0 0-.61-.5c-.9-.49-1.62 0-1.62 1.12z"
          />
          <path
            className="prefix__cls-23"
            d="m415.91 362.88-.37-.75.9-.52a1.08 1.08 0 0 1 1.08.1 3.71 3.71 0 0 1 1.61 3 1.32 1.32 0 0 1-.51 1.19l-.92.53-.4-.79a3.87 3.87 0 0 1-1.39-2.76z"
          />
          <path
            className="prefix__cls-24"
            d="M415 363.35a3.86 3.86 0 0 0 1.25 2.7 2.53 2.53 0 0 0 .35.25c.89.52 1.61 0 1.61-1.09a3.89 3.89 0 0 0-1-2.45 2.39 2.39 0 0 0-.61-.5c-.9-.52-1.6-.03-1.6 1.09z"
          />
          <path
            className="prefix__cls-25"
            d="M416.58 362.92c-.56-.32-1 0-1 .76a2.46 2.46 0 0 0 1 1.95c.57.32 1 0 1-.76a2.44 2.44 0 0 0-1-1.95z"
          />
          <path
            className="prefix__cls-26"
            d="M416.15 364a1.15 1.15 0 0 0 .43.93.26.26 0 0 0 .28 0 .51.51 0 0 0 .16-.43 1.14 1.14 0 0 0-.44-.93.24.24 0 0 0-.18 0c-.15.01-.25.18-.25.43z"
          />
          <path
            className="prefix__cls-27"
            d="M416.24 364a1.16 1.16 0 0 0 .44.93.35.35 0 0 0 .18 0 .51.51 0 0 0 .16-.43 1.14 1.14 0 0 0-.44-.93.24.24 0 0 0-.18 0 .49.49 0 0 0-.16.43z"
          />
          <path
            className="prefix__cls-25"
            d="M415 363.35a3.86 3.86 0 0 0 1.25 2.7 4.5 4.5 0 0 1-1-2c-.14-.64-.09-1.57.47-1.8s1.28.26 1.51.48a2.39 2.39 0 0 0-.61-.5c-.92-.49-1.62 0-1.62 1.12z"
          />
          <path
            className="prefix__cls-16"
            d="M421.79 366.32a.4.4 0 0 1-.6.37l-1.8-1-.59-.34v-.06a.22.22 0 0 0 0-.09 4.26 4.26 0 0 0-1.93-3.34c-1.07-.62-1.93-.12-1.93 1.11v.16l-14.31-8.26a.28.28 0 0 0 0-.09 4.27 4.27 0 0 0-1.93-3.34c-1.07-.62-1.93-.12-1.93 1.11v.1l-1.51-.88v-12.09l20.31 11.72 2.87 2.12 1.3 6.32 1.73 3 .15 2z"
          />
          <path
            className="prefix__cls-28"
            d="m396.72 347.67.21.12c.18.11.43.27.43.56v.07c0 .15-.1.2-.19.16a.5.5 0 0 1 .21.42v.07c0 .3-.21.23-.44.09l-.22-.12zm.24.73c.11.07.19.06.19-.07v-.06a.32.32 0 0 0-.19-.3v.44zm0 .66c.11.06.19 0 .19-.08v-.11a.33.33 0 0 0-.19-.31h-.06v.44zm.6-.9.2.12v1c0 .17 0 .24.12.29s.12 0 .12-.16v-1l.21.12v1c0 .4-.21.31-.33.24a.64.64 0 0 1-.32-.62zm.85 1.42.16.1v.06c0 .15 0 .25.14.31s.12 0 .12-.06a.55.55 0 0 0-.1-.29l-.22-.38a.92.92 0 0 1-.12-.38c0-.18.12-.25.32-.13a.55.55 0 0 1 .31.47.68.68 0 0 1 0 .15l-.16-.09v-.06a.34.34 0 0 0-.13-.31q-.12-.06-.12.06a.37.37 0 0 0 .07.21l.24.43a.84.84 0 0 1 .13.41c0 .2-.12.25-.32.13a.55.55 0 0 1-.32-.48.36.36 0 0 1 0-.15zm1.12.71.16.09v.07a.3.3 0 0 0 .14.3c.07.05.12 0 .12-.05a.52.52 0 0 0-.1-.29l-.21-.38a.76.76 0 0 1-.12-.37c0-.18.11-.24.31-.13a.55.55 0 0 1 .31.47.77.77 0 0 1 0 .15l-.16-.09V350a.33.33 0 0 0-.13-.3c-.08 0-.12 0-.12.05a.4.4 0 0 0 .07.21l.23.43a.87.87 0 0 1 .14.4c0 .2-.12.25-.32.13a.53.53 0 0 1-.32-.47.68.68 0 0 1 0-.16zm.79-.46.5.28v.17l-.3-.17v.4l.23.13v.17l-.23-.14v.47l.31.17v.16l-.51-.29zm.68.37.22.13a.72.72 0 0 1 .41.63c0 .2-.06.3-.17.29l.21.67-.21-.13-.18-.61h-.08v.5l-.2-.11zm.23.84c.15.08.2 0 .2-.13v-.11a.31.31 0 0 0-.2-.31v.51zm.46-.42.21.12.15 1.16.15-1 .21.12-.25 1.21-.23-.13zm.85.49.21.12v1.35l-.21-.11zm.4 1.14v-.48c0-.4.21-.32.33-.25a.5.5 0 0 1 .28.45.36.36 0 0 1 0 .15l-.16-.1V352c0-.15 0-.25-.1-.28s-.11 0-.11.16v.62c0 .16 0 .23.11.28s.1 0 .1-.1v-.13l.19.11v.12c0 .22-.1.26-.29.16a.68.68 0 0 1-.35-.69zm.77-.46.5.29v.16l-.29-.17v.4l.23.13v.17l-.23-.14v.47l.3.17v.17l-.51-.3z"
          />
          <path className="prefix__cls-17" d="m426.82 348.69-2.88-2.11-8.35 4.82 2.87 2.11 8.36-4.82z" />
          <path
            className="prefix__cls-6"
            d="M430.11 361.24a13.5 13.5 0 0 1-3.82 3.22 13.29 13.29 0 0 1-4.54 1.61l-.26-3.27 8.35-4.82z"
          />
          <path
            className="prefix__cls-17"
            d="M429.84 358a13.53 13.53 0 0 1-3.84 3.2 13.15 13.15 0 0 1-4.54 1.6l-1.72-3 8.35-4.82z"
          />
          <path
            className="prefix__cls-29"
            d="M428.12 355a19.21 19.21 0 0 1-3.65 2.71 27.1 27.1 0 0 1-4.7 2.11l-1.31-6.33 5.22-3 2.4-1.39.74-.42z"
          />
          <path
            className="prefix__cls-30"
            d="m419.6 364.55.17-.13a4.75 4.75 0 0 0 1.78.9 11.38 11.38 0 0 0 4.87-1.65 11.17 11.17 0 0 0 3.63-3.14s.25 0 .25.41a10.65 10.65 0 0 1-5.09 4.22c-2.41.66-3.9.79-4.64.58s-.97-1.19-.97-1.19z"
          />
          <path
            className="prefix__cls-31"
            d="M430.21 360.7a13.5 13.5 0 0 1-3.82 3.22 13.29 13.29 0 0 1-4.54 1.61 3.93 3.93 0 0 1-2.25-1V366a3.93 3.93 0 0 0 2.25 1 13.4 13.4 0 0 0 4.54-1.6 13.61 13.61 0 0 0 3.82-3.23c.21-.39.12-1.68 0-1.47z"
          />
          <path
            className="prefix__cls-6"
            d="m426.82 348.69-.74.42-2.4 1.39-5.22 3 1.31 6.33a27.1 27.1 0 0 0 4.7-2.11 19.21 19.21 0 0 0 3.65-2.71zm-3 9.1a28 28 0 0 1-3.63 1.63.22.22 0 0 1-.29-.17l-.8-4a.36.36 0 0 1 .17-.38l3.38-2a.19.19 0 0 1 .29.13l1.05 4.38a.34.34 0 0 1-.16.41zm.67-.37a.18.18 0 0 1-.28-.12l-1-4.38a.37.37 0 0 1 .16-.38l.65-.37 2.61-1.51.12-.07a.17.17 0 0 1 .27.12l.8 4a.5.5 0 0 1-.14.43 20.45 20.45 0 0 1-3.18 2.28z"
          />
          <path
            className="prefix__cls-11"
            d="M421.79 363.16a9.21 9.21 0 0 0 1.5-.36s.17 1.23.17 1.62-1.49.8-1.53.35c-.06-.71-.14-1.61-.14-1.61zm7.85-4.43a8 8 0 0 1-.91.91s.12 1 .17 1.33.26.26.61-.1.31-.38.25-1-.12-1.14-.12-1.14z"
          />
          <path
            className="prefix__cls-29"
            d="m418.39 354.8.8 4.15c0 .16-.06.22-.21.14l-3.13-1.81a.57.57 0 0 1-.26-.45v-4.08c0-.16.11-.21.24-.12l2.26 1.7a.85.85 0 0 1 .3.47z"
          />
          <path className="prefix__cls-32" d="m427.34 354.82-3.66-2.11v-.37l2.88-1.66.78 4.14z" />
          <path
            className="prefix__cls-33"
            d="m423.62 362.72.19 1.78a.34.34 0 0 0 .26-.08l-.18-1.77zm.67-.2.18 1.77a.3.3 0 0 0 .27-.11l-.19-1.74zm.71-.26.18 1.76a.3.3 0 0 0 .26-.13l-.19-1.73zm.59-.26.19 1.75a.27.27 0 0 0 .25-.16l-.19-1.7zm.62-.39.19 1.74a.28.28 0 0 0 .24-.18l-.18-1.7zm.6-.37L427 363c.07 0 .2 0 .24-.2l-.18-1.67zm.56-.39.18 1.72c.08 0 .21-.07.23-.23l-.18-1.65zm.51-.38.18 1.71c.1 0 .22-.09.23-.26l-.18-1.63zm.47-.38.18 1.7c.11 0 .23-.1.23-.27l-.18-1.62z"
          />
          <path className="prefix__cls-19" d="M417.56 357.36v2a.33.33 0 0 0 .23.3 12.7 12.7 0 0 0-.11-2.19z" />
          <path className="prefix__cls-20" d="M417.68 357.43v1.9c0 .28.16.42.41.28l.19-.11a1 1 0 0 0 .44-.77v-1.9z" />
          <path className="prefix__cls-9" d="m418.72 356.83-.12-.07-1.04.6.12.07 1.04-.6z" />
          <path className="prefix__cls-21" d="M418.2 358v1.69a.24.24 0 0 0 .36.21l.68-.4" />
          <path
            className="prefix__cls-29"
            d="m419.15 354.54 7.54-4.36a.28.28 0 0 0 .14-.29l-.14-.68a.14.14 0 0 0-.21-.1l-7.54 4.36a.28.28 0 0 0-.14.29l.14.68a.14.14 0 0 0 .21.1zm-4.08 2.01v-4.09a.55.55 0 0 0-.26-.45l-3.54-2.01a.16.16 0 0 0-.26.15v4.09a.57.57 0 0 0 .26.45l3.54 2.05c.19.04.26-.03.26-.19zm-4.86-2.77v-4.1a.61.61 0 0 0-.26-.45l-3.54-2c-.14-.08-.26 0-.26.15v4.09a.57.57 0 0 0 .26.45l3.54 2.05a.16.16 0 0 0 .26-.19zm-4.86-2.78v-4.09a.59.59 0 0 0-.26-.45l-3.54-2c-.15-.09-.26 0-.26.15v4.09a.61.61 0 0 0 .26.45l3.54 2c.14.09.26.02.26-.15zm-4.86-2.77v-4.09a.57.57 0 0 0-.26-.45l-3.54-2.05c-.15-.08-.26 0-.26.15v4.09a.57.57 0 0 0 .26.45l3.54 2.05c.14.08.26.02.26-.15z"
          />
          <path className="prefix__cls-30" d="m547.65 433-1.44.83v.76l1.44-.83a.32.32 0 0 0 .16-.27v-.72z" />
          <path className="prefix__cls-30" d="m540.96 439.66 5.25-5.05v-.77l-.69-.4-5.49 6.33.93-.11z" />
          <path className="prefix__cls-16" d="m540.03 439.77 6.18-5.93-.91-.53-6.17 5.94.9.52z" />
          <path className="prefix__cls-30" d="M540.96 439.25v21.79l-.93.53v-21.8l.93-.52z" />
          <path className="prefix__cls-31" d="m540.03 461.57-.9-.52v-21.8l.9.52v21.8z" />
          <path
            className="prefix__cls-16"
            d="m547.65 432.56-.14-.08a.89.89 0 0 0-.78 0l-1.44.83.92.53 1.44-.83a.24.24 0 0 0 0-.45z"
          />
          <path
            className="prefix__cls-30"
            d="m502.39 406.73-1.44.83v.77l1.44-.83a.33.33 0 0 0 .16-.28v-.72zm-6.69 6.66 5.25-5.06v-.77l-.68-.39-5.5 6.33.93-.11z"
          />
          <path className="prefix__cls-16" d="m494.77 413.5 6.18-5.94-.91-.52-6.17 5.94.9.52z" />
          <path className="prefix__cls-30" d="M495.7 412.97v21.8l-.93.52V413.5l.93-.53z" />
          <path className="prefix__cls-31" d="m494.77 435.29-.9-.52v-21.79l.9.52v21.79z" />
          <path
            className="prefix__cls-16"
            d="m502.39 406.29-.14-.08a.83.83 0 0 0-.78 0L500 407l.91.52 1.44-.82c.25-.09.25-.29.04-.41z"
          />
          <path
            className="prefix__cls-30"
            d="m457.13 380.62-1.44.83v.76l1.44-.83a.3.3 0 0 0 .16-.27v-.72zm-6.69 6.65 5.25-5.05v-.77l-.68-.39-5.49 6.32.92-.11z"
          />
          <path className="prefix__cls-16" d="m449.52 387.38 6.17-5.93-.91-.53-6.17 5.94.91.52z" />
          <path className="prefix__cls-30" d="M450.44 386.86v21.79l-.92.53v-21.8l.92-.52z" />
          <path className="prefix__cls-31" d="m449.52 409.18-.91-.52v-21.8l.91.52v21.8z" />
          <path
            className="prefix__cls-16"
            d="m457.13 380.17-.13-.08a.89.89 0 0 0-.78 0l-1.44.83.91.53 1.44-.83c.21-.12.21-.32 0-.45z"
          />
          <path className="prefix__cls-30" d="m411.87 354.51-1.44.83v.77l1.44-.84a.3.3 0 0 0 .13-.27v-.72z" />
          <path className="prefix__cls-30" d="m405.18 361.17 5.26-5.06v-.76l-.69-.4-5.49 6.33.92-.11z" />
          <path className="prefix__cls-16" d="m404.26 361.28 6.18-5.94-.92-.52-6.16 5.94.9.52z" />
          <path className="prefix__cls-30" d="M405.18 360.75v21.8l-.92.52v-21.79l.92-.53z" />
          <path className="prefix__cls-31" d="m404.26 383.07-.9-.52v-21.79l.9.52v21.79z" />
          <path
            className="prefix__cls-16"
            d="m411.87 354.07-.13-.08a.83.83 0 0 0-.78 0l-1.44.83.91.52 1.44-.83c.22-.12.22-.32 0-.44z"
          />
          <path
            className="prefix__cls-9"
            d="m493.3 168.83-6.78 3.92a1.06 1.06 0 0 0 0 2l16 9.21c4.78 2.77 14.08-3.78 10.25-5.92l-16-9.21a3.8 3.8 0 0 0-3.47 0z"
          />
          <path
            className="prefix__cls-34"
            d="M507.6 171.17a.53.53 0 0 0 .07.2c.14.26.44.58.55.55s.15-.16.18-.34a1 1 0 0 0 0-.25c0-.27-.11-.91-.49-1.08a.2.2 0 0 0-.23.05.67.67 0 0 0-.11.18 2.15 2.15 0 0 0 .03.69z"
          />
          <path
            className="prefix__cls-35"
            d="M507.66 171.41c.14.26.44.58.55.55s.15-.16.18-.34a1 1 0 0 0 0-.25c0-.27-.11-.91-.49-1.08a.2.2 0 0 0-.23.05l.06.12c.26.11.33.52.31.83s-.22.28-.38.12z"
          />
          <path
            className="prefix__cls-36"
            d="M507.59 170.52c.1-.1.34-.1.54.17a1.88 1.88 0 0 1 .26.93 1 1 0 0 0 0-.25c0-.27-.11-.91-.49-1.08-.13-.07-.26.09-.31.23z"
          />
          <path className="prefix__cls-37" d="m487.39 172.93 2.63-1.52-1.46-.84-1.76 1.01.59 1.35z" />
          <path
            className="prefix__cls-23"
            d="m488.5 172.57-.38-.75.9-.52a1.07 1.07 0 0 1 1.09.1 3.72 3.72 0 0 1 1.6 2.95 1.3 1.3 0 0 1-.51 1.19l-.93.53-.39-.79a3.83 3.83 0 0 1-1.38-2.71z"
          />
          <path
            className="prefix__cls-24"
            d="M487.56 173a3.88 3.88 0 0 0 1.25 2.7 2.11 2.11 0 0 0 .35.26c.89.51 1.61 0 1.61-1.1a3.87 3.87 0 0 0-1-2.45 2.53 2.53 0 0 0-.61-.5c-.88-.49-1.6 0-1.6 1.09z"
          />
          <path
            className="prefix__cls-25"
            d="M489.17 172.61c-.57-.33-1 0-1 .76a2.4 2.4 0 0 0 1 1.94c.56.33 1 0 1-.76a2.46 2.46 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M488.73 173.71a1.17 1.17 0 0 0 .44.93.24.24 0 0 0 .28 0 .47.47 0 0 0 .16-.42 1.16 1.16 0 0 0-.44-.93.28.28 0 0 0-.18 0c-.16-.03-.26.15-.26.42z"
          />
          <path
            className="prefix__cls-27"
            d="M488.83 173.67a1.17 1.17 0 0 0 .43.93.28.28 0 0 0 .19 0 .47.47 0 0 0 .16-.42 1.16 1.16 0 0 0-.44-.93.28.28 0 0 0-.18 0 .54.54 0 0 0-.16.42z"
          />
          <path
            className="prefix__cls-25"
            d="M487.56 173a3.88 3.88 0 0 0 1.25 2.7 4.62 4.62 0 0 1-1-2c-.13-.65-.08-1.57.47-1.81s1.29.26 1.52.49a2.53 2.53 0 0 0-.61-.5c-.91-.46-1.63.03-1.63 1.12z"
          />
          <path className="prefix__cls-37" d="m499.09 179.69 2.63-1.52-1.46-.85-2.63 1.52 1.46.85z" />
          <path
            className="prefix__cls-23"
            d="m500.17 179.31-.38-.75.9-.52a1.07 1.07 0 0 1 1.09.09 3.74 3.74 0 0 1 1.61 3 1.29 1.29 0 0 1-.52 1.18l-.92.54-.4-.8a3.79 3.79 0 0 1-1.38-2.74z"
          />
          <path
            className="prefix__cls-24"
            d="M499.23 179.77a3.85 3.85 0 0 0 1.26 2.7 2.11 2.11 0 0 0 .35.26c.89.51 1.61 0 1.61-1.1a3.89 3.89 0 0 0-1-2.45 2.85 2.85 0 0 0-.61-.5c-.84-.52-1.61-.03-1.61 1.09z"
          />
          <path
            className="prefix__cls-25"
            d="M500.84 179.35c-.56-.33-1 0-1 .76a2.46 2.46 0 0 0 1 1.94c.57.33 1 0 1-.76a2.42 2.42 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M500.4 180.45a1.19 1.19 0 0 0 .44.93.26.26 0 0 0 .28 0 .51.51 0 0 0 .16-.43 1.17 1.17 0 0 0-.44-.93.31.31 0 0 0-.18 0c-.15-.02-.26.15-.26.43z"
          />
          <path
            className="prefix__cls-27"
            d="M500.5 180.41a1.17 1.17 0 0 0 .44.93.31.31 0 0 0 .18 0 .51.51 0 0 0 .16-.43 1.17 1.17 0 0 0-.44-.93.31.31 0 0 0-.18 0 .51.51 0 0 0-.16.43z"
          />
          <path
            className="prefix__cls-25"
            d="M499.23 179.77a3.85 3.85 0 0 0 1.26 2.7 4.46 4.46 0 0 1-1-2c-.14-.65-.09-1.58.46-1.81s1.29.26 1.52.48a2.85 2.85 0 0 0-.61-.5c-.86-.48-1.63.01-1.63 1.13z"
          />
          <path
            className="prefix__cls-38"
            d="M485.78 170.53v.21a2.21 2.21 0 0 0 1.1 1.9l.51.29c0-1.3.85-1.87 1.9-1.26a4.35 4.35 0 0 1 1.88 3.15 1.56 1.56 0 0 1 0 .31l7.9 4.56a2.17 2.17 0 0 1 0-.26c.1-1.12.91-1.58 1.89-1l.18.11a4.09 4.09 0 0 1 1.16 1.36 4.37 4.37 0 0 1 .45 1.15 3.55 3.55 0 0 1 .09.47.75.75 0 0 0 .42.58 6.7 6.7 0 0 0 6.33-.21l1.14-.66a3.86 3.86 0 0 0 1.93-3.34v-.54a5.65 5.65 0 0 0 0-.59l-.06-.36a4.37 4.37 0 0 0-.6-1.4c-.05-.09-.11-.18-.17-.27a4.7 4.7 0 0 0-1-1l-2.82-2-2.93-3a36.7 36.7 0 0 0-5.12-3.42 9.67 9.67 0 0 0-4.42-1.2 7.36 7.36 0 0 0-1.34.09h-.15a4.08 4.08 0 0 0-1.25.55c-.36.22-5.77 3.34-5.77 3.34l-.22.14a2.51 2.51 0 0 0-.23.21 3.29 3.29 0 0 0-.8 2.16z"
          />
          <path
            className="prefix__cls-39"
            d="M512.69 177.34a5.65 5.65 0 0 0 0-.59l-.06-.36A4.37 4.37 0 0 0 512 175c-.05-.09-.11-.18-.17-.27a4.57 4.57 0 0 0-.64-.68c.74.82.75 2.1-1.33 3.51a5.57 5.57 0 0 1-4.64.95l.53 4.29a6.7 6.7 0 0 0 3.87-.88l1.14-.66a3.86 3.86 0 0 0 1.93-3.34z"
          />
          <path
            className="prefix__cls-28"
            d="M506.85 182.71c.38-1.48-.45-3.84-1.55-4.31a10.18 10.18 0 0 1-4.07-1.87l-.87-.48-1.71-3.74.67-.16s0-.32-.53-.68-5.38-3.28-6.15-3.62-1.3-.71-2-.44a13.17 13.17 0 0 0-4 .93 3.6 3.6 0 0 0-.51.8 3.36 3.36 0 0 0-.29 1.36v.21a2.21 2.21 0 0 0 1.1 1.9l.51.29c0-1.3.85-1.87 1.9-1.26a4.35 4.35 0 0 1 1.88 3.15 1.62 1.62 0 0 1 0 .31l7.9 4.56a2.17 2.17 0 0 1 0-.26 1.16 1.16 0 0 1 1.89-1l.18.11a4.09 4.09 0 0 1 1.16 1.36 4.37 4.37 0 0 1 .45 1.15 3.55 3.55 0 0 1 .09.47.75.75 0 0 0 .42.58 6.67 6.67 0 0 0 3.53.64z"
          />
          <path
            className="prefix__cls-38"
            d="M509.47 173.32a17.16 17.16 0 0 0-1.57-1.26l-5.9 3.74a22.94 22.94 0 0 0 3.37-1.6 13 13 0 0 0 2.52-1.88c.22-.08 1.58 1 1.58 1z"
          />
          <path
            className="prefix__cls-39"
            d="M498.59 175.75a3.28 3.28 0 0 0 .57.31c.26.07.21-.25-.19-1.61s-.6-2.11-1.2-2.53-5-2.94-5.56-3.29a2.07 2.07 0 0 0-1.9-.26c-.63.26-1 .49-1 1s-.15.84.88 1.43 8.4 4.95 8.4 4.95z"
          />
          <path
            className="prefix__cls-34"
            d="M503.62 180.11c.54.69 1.21 1.14 2.89 1a9.17 9.17 0 0 0 4-1.54 4.19 4.19 0 0 0 1.56-1.46 3.78 3.78 0 0 0 .55-1.33l-.06-.36A4.37 4.37 0 0 0 512 175c-.05-.09-.11-.18-.17-.27a4.25 4.25 0 0 1 .05.82 15.43 15.43 0 0 0-.09 1.67c0 .5-.29 1.07-1.59 1.83-1.54.91-2.13.77-2.73.59a4.94 4.94 0 0 0-1-.17 9.35 9.35 0 0 1-1.13-.13c-.64-.16-1-.6-1.47-.54-.74.04-.58.89-.25 1.31z"
          />
          <path
            className="prefix__cls-35"
            d="M506.45 179.43a6.75 6.75 0 0 1 1.33.37c.28.1.54.19 1.4-.11a7.75 7.75 0 0 0 2.26-1.4c.46-.41.39-.66.35-1.11 0 .5-.29 1.07-1.59 1.83-1.54.91-2.13.77-2.73.59a4.94 4.94 0 0 0-1-.17z"
          />
          <path
            className="prefix__cls-40"
            d="m498.65 172.34 1.71 3.74c.34.59 3.93-1.23 6.08-2.75 1-.72 1.73-1.38 1.57-1.66a20.47 20.47 0 0 0-2.93-3l-.34.33c-.28.25-.57.5-.89.74a20.53 20.53 0 0 1-5.2 2.6z"
          />
          <path
            className="prefix__cls-41"
            d="m490 170.74 2.49 1.44.49.28 2 1.14.47.28 2.59 1.5c.59.34 1 .57.88.17-.06-.24-.36-1.34-.6-2.18a2.52 2.52 0 0 0-.78-1.26l-.17-.14-.24-.15-2-1.16h-.06l-.5-.29-1.12-.64-.37-.22-1.17-.68a2.42 2.42 0 0 0-.48-.21 1.87 1.87 0 0 0-1.57.39c-.36.17-.28 1.48.14 1.73z"
          />
          <path
            className="prefix__cls-35"
            d="m495.47 173.88 2.59 1.5c.59.34 1 .57.88.17-.06-.24-.36-1.34-.6-2.18a2.52 2.52 0 0 0-.78-1.26 4.08 4.08 0 0 1 .8 1.85c.34 1.26.57 1.74-.82 1s-1.99-1.04-2.07-1.08zm8.44 5.05c.5 0 .8.59 1.76.67s1.49.1 1.78.34.17.56-.32.76a3.64 3.64 0 0 1-2.67-.08c-.84-.49-1.37-1.72-.55-1.69zm1.18 3.15a.53.53 0 0 0 .41.17 4.35 4.35 0 0 0 .53 0c.43 0 .84 0 .94-.19s.38-.56.17-.59a.67.67 0 0 0-.2 0 6.26 6.26 0 0 1-.83 0h-.83c-.45 0-.28.45-.19.61z"
          />
          <path
            className="prefix__cls-37"
            d="M512.25 177.32a1.8 1.8 0 0 0 .34-.93A4.37 4.37 0 0 0 512 175a5.64 5.64 0 0 1 0 1.52c-.09.48.16.85.25.8z"
          />
          <path
            className="prefix__cls-34"
            d="M508.74 181.11a.77.77 0 0 0 .55.33 4.6 4.6 0 0 0 1.47-.67 4.81 4.81 0 0 0 .77-.6.9.9 0 0 0 .21-.33 1.89 1.89 0 0 0 .05-.68c0-.12-.12-.06-.18 0l-.41.33c-.16.12-.38.27-.68.46a9.27 9.27 0 0 1-1.58.87c-.25.1-.33.18-.2.29zM498 175.79c.12.58.76.7 1.24.69a1.69 1.69 0 0 0 .53-.09c.19-.11.1-.33 0-.46a2.52 2.52 0 0 0-1.4-.67c-.24-.01-.37.12-.37.53z"
          />
          <path
            className="prefix__cls-35"
            d="M498 175.79c.12.58.76.7 1.24.69a1.69 1.69 0 0 0 .53-.09c.19-.11.1-.33 0-.46.09.17-.4.28-.84.13s-.77-.5-.56-.8c-.24-.01-.37.12-.37.53z"
          />
          <path
            className="prefix__cls-36"
            d="M498 175.79c.12.58.76.7 1.24.69a1.15 1.15 0 0 1-1-.59c-.15-.3 0-.6.13-.63-.24-.01-.37.12-.37.53z"
          />
          <path
            className="prefix__cls-41"
            d="M489 167.78a3.36 3.36 0 0 0 1.55-.56l4.36-2.51c.8-.46.86-.54.47-.56a7 7 0 0 0-.77 0 2.86 2.86 0 0 0-1.24.39l-3.85 2.22c-2.21 1.32-1.44 1.17-.52 1.02z"
          />
          <path
            className="prefix__cls-42"
            d="M485.78 170.44c.25.21.41-.31.44-.72s0-.47-.15-.55-.3.33-.36.55a1.39 1.39 0 0 0-.06.31.5.5 0 0 0 .13.41z"
          />
          <path
            className="prefix__cls-41"
            d="M503.72 179.52a2.1 2.1 0 0 0 .49.67 1.39 1.39 0 0 0 1.46.43.4.4 0 0 0 .18-.6 1.42 1.42 0 0 0-.58-.27 3.37 3.37 0 0 1-.8-.36 2.36 2.36 0 0 0-.43-.21c-.33-.11-.41.09-.32.34zm2.76 1.06c.24 0 .67 0 .8-.21s0-.22-.12-.31a.71.71 0 0 0-.37-.12.78.78 0 0 0-.46.09.53.53 0 0 0-.14.12c-.19.22.02.38.29.43zm5.6-4.13a.86.86 0 0 0 0 .23c0 .12.14.18.29 0s.07-.94-.15-.9a.18.18 0 0 0-.07.05 1.32 1.32 0 0 0-.07.62z"
          />
          <path
            className="prefix__cls-34"
            d="M508.1 179.44c0 .06.14 0 .38 0a8.61 8.61 0 0 0 1.71-.75l.25-.16a4.2 4.2 0 0 0 1-.82c.1-.17 0-.19-.1-.24a.56.56 0 0 0-.53 0l-.72.39a14 14 0 0 0-1.7 1c-.21.23-.34.53-.29.58z"
          />
          <path
            className="prefix__cls-39"
            d="M493.82 173.1s-.23.09-.2.71.2 2.16.2 2.16-.36-1.68-.44-2.19a1.13 1.13 0 0 1 .22-.85z"
          />
          <path
            className="prefix__cls-38"
            d="M501.38 178.18a3.33 3.33 0 0 1 1.66 2.41 2.39 2.39 0 0 0-1.66-2.41zm-11.31-6.45a3.31 3.31 0 0 1 1.4 2.57 2.4 2.4 0 0 0-1.4-2.57zm7.12 3.48-3.37-1.94s-.11.15-.08.25zm-3.78-2.21-3-1.8 2.94 2s-.03-.1.06-.2zm-1.34-7.75s-3.32 1.9-3.66 2.11-.92.64-.78.68 1.27 0 1.27 0-.88.1-1.25.16a2.17 2.17 0 0 0-1.22.49s.07-.25.62-.59c.78-.5 5.02-2.85 5.02-2.85zm12.09 3.8c-1.12 1.13-4.6 2.74-5.51 2.68-1.08-.06-3.66-1.62-3.66-1.62a21.88 21.88 0 0 0 3.44 1.89c1.03.25 5.09-2.06 5.73-2.95zm.93 13.03a.53.53 0 0 0 .41.17c-.33-.06-.44-.27-.42-.45s.1-.16.59-.17a5.74 5.74 0 0 0 1.27-.14 6.26 6.26 0 0 1-.83 0h-.83c-.45 0-.28.43-.19.59z"
          />
          <g id="car">
            <path
              className="prefix__cls-43"
              d="M509.86 177.52a6.3 6.3 0 0 1-3.9 1.15c-2-.13-4.73-2.11-4.73-2.11a12.44 12.44 0 0 0 4.58 1.91 6.92 6.92 0 0 0 4.05-.95z"
            />
            <path
              className="prefix__cls-40"
              d="M504.06 179.43a1.27 1.27 0 0 0 .87.91c.7.26 1-.12.92-.32a.61.61 0 0 0-.26-.16l-.32-.11a3.33 3.33 0 0 1-.65-.28l-.15-.08c-.26-.15-.39-.12-.41.04z"
            />
            <path
              className="prefix__cls-16"
              d="M504.47 179.66a1.1 1.1 0 0 0 .91.53c.41 0 .33-.29.17-.37l-.32-.11a3.33 3.33 0 0 1-.65-.28c-.19-.06-.24.01-.11.23z"
            />
            <path
              className="prefix__cls-40"
              d="M506.87 180.43c.35 0 .41-.24.29-.37L507 180a.7.7 0 0 0-.25-.05h-.23a.63.63 0 0 0-.23.08c-.29.2.24.42.58.4z"
            />
            <path
              className="prefix__cls-16"
              d="M506.46 180.07a.84.84 0 0 0 .53.12c.21 0 .17-.13.05-.2a.7.7 0 0 0-.25-.05h-.23c-.08.06-.14.06-.1.13z"
            />
          </g>
          <path
            className="prefix__cls-40"
            d="M512.08 176.45a.86.86 0 0 0 0 .23c.1 0 .2-.1.26-.32s-.11-.58-.19-.56a.62.62 0 0 0-.08.23 1.62 1.62 0 0 0 .01.42z"
          />
          <path
            className="prefix__cls-16"
            d="M512.08 176.45c.1.23.24-.1.22-.26s-.11-.28-.19-.16a1.62 1.62 0 0 0-.03.42z"
          />
          <path
            className="prefix__cls-35"
            d="M508.1 179.44c0 .06.14 0 .38 0a8.61 8.61 0 0 0 1.71-.75l.25-.16a11.19 11.19 0 0 1-1.86.8c-.36.07-.39 0-.28-.17a1.56 1.56 0 0 1 .47-.45c.18-.11.89-.59 1.25-.8a14 14 0 0 0-1.7 1c-.14.18-.27.48-.22.53zm.64 1.67a.77.77 0 0 0 .55.33 4.6 4.6 0 0 0 1.47-.67 4.81 4.81 0 0 0 .77-.6 7.32 7.32 0 0 1-2.06 1.15.52.52 0 0 1-.59-.2c-.15-.14.05-.15.59-.45a11.44 11.44 0 0 0 1.72-1.19c-.16.12-.38.27-.68.46a9.27 9.27 0 0 1-1.58.87c-.24.11-.32.19-.19.3zm-10.09-8.77 1.71 3.74c.34.59 3.93-1.23 6.08-2.75a34.93 34.93 0 0 1-4.57 2.3c-.87.32-1.26.44-1.53 0s-1.34-2.93-1.69-3.29z"
          />
          <path
            className="prefix__cls-44"
            d="M507.35 171.5a7.24 7.24 0 0 0-.9-1.1 7.07 7.07 0 0 0-1.66-1.45h-.05c-.24.23-.51.44-.78.66.04.01 3.4 1.97 3.39 1.89z"
          />
          <path
            className="prefix__cls-35"
            d="m492.92 172.43 2.07 1.18a3 3 0 0 1-.86-.84 5.82 5.82 0 0 1 0-2c0-.48.21-.52.46-.41l-1.12-.64a.79.79 0 0 1 .27.85c0 .38-.06 1.18-.13 1.68s-.43.3-.6.24zm-2.92-1.69 2.49 1.44c-.73-.46-2.23-1.39-2.44-1.56a1.49 1.49 0 0 1-.29-1.15c0-.38.24-.48.62-.68a1.84 1.84 0 0 1 1-.21 1.87 1.87 0 0 0-1.57.39c-.31.21-.23 1.52.19 1.77z"
          />
          <path
            className="prefix__cls-39"
            d="M498.79 171.5s-4.74-3.11-6.28-3.8-1.9-.26-1.9-.26c.95-.2 2.57.77 4.17 1.73z"
          />
          <path
            className="prefix__cls-28"
            d="M504.06 168.61s-2.41-1.36-4-2.32-3.54-1.87-4.5-1.67c0 0 .62-.41 2.47.38 1.53.66 6.03 3.61 6.03 3.61z"
          />
          <path
            className="prefix__cls-45"
            d="M485.78 170.44c.25.21.41-.31.44-.72s0-.47-.15-.55a2.08 2.08 0 0 1-.1 1c-.14.2-.31 0-.32-.16a.5.5 0 0 0 .13.43z"
          />
          <path
            className="prefix__cls-46"
            d="M485.91 169.66a.09.09 0 0 0 0 .06s.06 0 .07-.05a.25.25 0 0 0 0-.15.36.36 0 0 0-.08-.19s-.08 0-.08.09a1 1 0 0 0 .09.24z"
          />
          <path className="prefix__cls-47" d="M485.78 169.68v.18c0 .03 0 0 0 0v-.06a.32.32 0 0 1 0-.12z" />
          <path
            className="prefix__cls-9"
            d="m251.73 367.55 6.78 3.92a1.06 1.06 0 0 1 0 2l-16 9.21c-4.78 2.77-14.08-3.78-10.25-5.92l16-9.21a3.83 3.83 0 0 1 3.47 0z"
          />
          <path
            className="prefix__cls-34"
            d="M237.25 369.88a.53.53 0 0 1-.07.2c-.14.26-.44.58-.54.55s-.16-.16-.19-.33v-.25c0-.27.12-.91.5-1.08a.21.21 0 0 1 .22.06.37.37 0 0 1 .11.18 1.81 1.81 0 0 1-.03.67z"
          />
          <path
            className="prefix__cls-35"
            d="M237.19 370.12c-.14.26-.44.58-.54.55s-.16-.16-.19-.33v-.25c0-.27.12-.91.5-1.08a.21.21 0 0 1 .22.06l-.05.11c-.27.12-.34.52-.31.84s.18.27.37.1z"
          />
          <path
            className="prefix__cls-36"
            d="M237.26 369.24c-.1-.11-.33-.11-.53.17a1.85 1.85 0 0 0-.27.92v-.25c0-.27.12-.91.5-1.08.12-.07.25.1.3.24z"
          />
          <path className="prefix__cls-37" d="m257.47 371.64-2.64-1.51 1.47-.85 1.75 1.01-.58 1.35z" />
          <path
            className="prefix__cls-23"
            d="m256.36 371.28.37-.75-.9-.52a1.08 1.08 0 0 0-1.08.1 3.71 3.71 0 0 0-1.61 2.95 1.32 1.32 0 0 0 .51 1.19l.92.53.4-.79a3.87 3.87 0 0 0 1.39-2.71z"
          />
          <path
            className="prefix__cls-24"
            d="M257.29 371.75a3.86 3.86 0 0 1-1.25 2.7 3.79 3.79 0 0 1-.35.25c-.89.51-1.61 0-1.61-1.1a3.94 3.94 0 0 1 1-2.45 2.2 2.2 0 0 1 .61-.5c.88-.51 1.6-.02 1.6 1.1z"
          />
          <path
            className="prefix__cls-25"
            d="M255.69 371.32c.56-.32 1 0 1 .76a2.46 2.46 0 0 1-1 1.95c-.57.32-1 0-1-.76a2.44 2.44 0 0 1 1-1.95z"
          />
          <path
            className="prefix__cls-26"
            d="M256.12 372.42a1.17 1.17 0 0 1-.43.93.26.26 0 0 1-.28 0 .51.51 0 0 1-.16-.43 1.13 1.13 0 0 1 .44-.93.24.24 0 0 1 .18 0c.13.01.25.16.25.43z"
          />
          <path
            className="prefix__cls-27"
            d="M256 372.38a1.16 1.16 0 0 1-.44.93.35.35 0 0 1-.18.05.51.51 0 0 1-.16-.43 1.13 1.13 0 0 1 .44-.93.24.24 0 0 1 .18 0 .47.47 0 0 1 .16.38z"
          />
          <path
            className="prefix__cls-25"
            d="M257.29 371.75a3.86 3.86 0 0 1-1.25 2.7 4.5 4.5 0 0 0 1-2c.14-.64.09-1.57-.47-1.8s-1.28.25-1.51.48a2.2 2.2 0 0 1 .61-.5c.9-.49 1.62 0 1.62 1.12z"
          />
          <path className="prefix__cls-37" d="m245.77 378.4-2.64-1.52 1.47-.84 2.63 1.52-1.46.84z" />
          <path
            className="prefix__cls-23"
            d="m244.68 378 .38-.75-.9-.52a1 1 0 0 0-1.08.1 3.71 3.71 0 0 0-1.61 2.95A1.32 1.32 0 0 0 242 381l.93.53.4-.79a3.86 3.86 0 0 0 1.35-2.74z"
          />
          <path
            className="prefix__cls-24"
            d="M245.62 378.48a3.84 3.84 0 0 1-1.25 2.7 3.9 3.9 0 0 1-.36.25c-.89.51-1.61 0-1.61-1.1a3.87 3.87 0 0 1 1-2.45 2.53 2.53 0 0 1 .61-.5c.89-.51 1.61-.02 1.61 1.1z"
          />
          <path
            className="prefix__cls-25"
            d="M244 378.06c.57-.33 1 0 1 .76a2.41 2.41 0 0 1-1 1.94c-.56.33-1 0-1-.76a2.46 2.46 0 0 1 1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M244.45 379.16a1.17 1.17 0 0 1-.44.93.24.24 0 0 1-.28 0 .5.5 0 0 1-.16-.42 1.16 1.16 0 0 1 .44-.93.29.29 0 0 1 .19-.05c.15.02.25.2.25.47z"
          />
          <path
            className="prefix__cls-27"
            d="M244.35 379.12a1.17 1.17 0 0 1-.43.93.28.28 0 0 1-.19 0 .5.5 0 0 1-.16-.42 1.16 1.16 0 0 1 .44-.93.29.29 0 0 1 .19-.05.54.54 0 0 1 .15.47z"
          />
          <path
            className="prefix__cls-25"
            d="M245.62 378.48a3.84 3.84 0 0 1-1.25 2.7 4.62 4.62 0 0 0 1-2c.13-.65.08-1.57-.47-1.81s-1.28.26-1.52.49a2.53 2.53 0 0 1 .61-.5c.91-.49 1.63 0 1.63 1.12z"
          />
          <path
            className="prefix__cls-38"
            d="M259.07 369.24v.21a2.19 2.19 0 0 1-1.09 1.9l-.51.29c0-1.3-.86-1.87-1.91-1.26a4.41 4.41 0 0 0-1.88 3.15v.31l-7.89 4.56v-.25c-.11-1.13-.91-1.58-1.89-1l-.18.12a4 4 0 0 0-1.17 1.35 4.9 4.9 0 0 0-.45 1.15 2.72 2.72 0 0 0-.08.47.78.78 0 0 1-.42.59 6.73 6.73 0 0 1-6.33-.22l-1.14-.65a3.86 3.86 0 0 1-1.93-3.35v-.54a3.69 3.69 0 0 1 0-.58 2.08 2.08 0 0 1 .06-.36 4.4 4.4 0 0 1 .58-1.44l.18-.26a4.31 4.31 0 0 1 1-1l2.82-2 2.92-3a36.92 36.92 0 0 1 5.13-3.41 9.49 9.49 0 0 1 4.41-1.21 6.67 6.67 0 0 1 1.34.1h.15a4.15 4.15 0 0 1 1.24.56l5.77 3.33.22.15a.94.94 0 0 1 .23.21 3.23 3.23 0 0 1 .8 2.15z"
          />
          <path
            className="prefix__cls-28"
            d="M232.17 376.05a3.69 3.69 0 0 1 0-.58 2.08 2.08 0 0 1 .06-.36 4.4 4.4 0 0 1 .58-1.44l.18-.26a4.57 4.57 0 0 1 .63-.69c-.73.82-.74 2.1 1.33 3.51a5.58 5.58 0 0 0 4.64.95l-.53 4.29a6.69 6.69 0 0 1-3.86-.88l-1.14-.65a3.86 3.86 0 0 1-1.93-3.35z"
          />
          <path
            className="prefix__cls-39"
            d="M238 381.43c-.39-1.48.44-3.85 1.54-4.32a10.22 10.22 0 0 0 4.07-1.86l.87-.49 1.72-3.74-.67-.16s0-.32.52-.68 5.38-3.28 6.16-3.62 1.29-.71 2-.43a13.12 13.12 0 0 1 4 .92 3.2 3.2 0 0 1 .51.8 3.27 3.27 0 0 1 .29 1.35v.21a2.19 2.19 0 0 1-1.09 1.9l-.51.3c0-1.31-.86-1.88-1.91-1.27a4.41 4.41 0 0 0-1.88 3.15v.31l-7.89 4.56v-.25c-.11-1.13-.91-1.58-1.89-1l-.18.12a4 4 0 0 0-1.17 1.35 4.9 4.9 0 0 0-.45 1.15 2.72 2.72 0 0 0-.08.47.76.76 0 0 1-.42.59 6.78 6.78 0 0 1-3.54.64z"
          />
          <path
            className="prefix__cls-38"
            d="M235.38 372a15.65 15.65 0 0 1 1.57-1.25l5.89 3.74a23.92 23.92 0 0 1-3.36-1.61A14.09 14.09 0 0 1 237 371c-.26 0-1.62 1-1.62 1z"
          />
          <path
            className="prefix__cls-39"
            d="M246.26 374.46a2.91 2.91 0 0 1-.57.31c-.25.07-.2-.25.2-1.61s.59-2.11 1.19-2.53 5-2.94 5.56-3.29a2.07 2.07 0 0 1 1.9-.25c.63.26 1 .48 1 1s.16.84-.87 1.43z"
          />
          <path
            className="prefix__cls-34"
            d="M241.23 378.82c-.54.7-1.2 1.14-2.88 1a9.29 9.29 0 0 1-4-1.53 4.25 4.25 0 0 1-1.57-1.47 3.87 3.87 0 0 1-.54-1.32 2.08 2.08 0 0 1 .06-.36 4.4 4.4 0 0 1 .58-1.44l.18-.26a3 3 0 0 0-.05.81c0 .46.13 1.2.09 1.68s.29 1.06 1.58 1.82c1.54.91 2.14.77 2.73.59a5.68 5.68 0 0 1 1-.17 9.6 9.6 0 0 0 1.13-.13c.64-.15 1-.6 1.46-.54.73.05.56.9.23 1.32z"
          />
          <path
            className="prefix__cls-35"
            d="M238.41 378.14a7.28 7.28 0 0 0-1.33.37c-.29.1-.55.19-1.4-.11a7.68 7.68 0 0 1-2.27-1.39 1 1 0 0 1-.34-1.11c0 .49.29 1.06 1.58 1.82 1.54.91 2.14.77 2.73.59a5.68 5.68 0 0 1 1-.17z"
          />
          <path
            className="prefix__cls-40"
            d="m246.21 371.05-1.72 3.74c-.34.59-3.93-1.23-6.08-2.74-1-.73-1.73-1.39-1.56-1.67a20.89 20.89 0 0 1 2.92-3l.35.33a9.44 9.44 0 0 0 .89.74 20 20 0 0 0 5.2 2.6z"
          />
          <path
            className="prefix__cls-41"
            d="m254.83 369.45-2.49 1.44-.49.28-2 1.14-.48.27c-1.3.76-2.38 1.38-2.6 1.5-.58.34-1 .57-.88.17.07-.24.37-1.34.6-2.18a2.56 2.56 0 0 1 .78-1.25 1.24 1.24 0 0 1 .18-.14 1.88 1.88 0 0 1 .23-.16l2-1.15a.1.1 0 0 1 .05 0l.51-.29 1.11-.64.37-.22 1.17-.67a2.81 2.81 0 0 1 .48-.22 1.91 1.91 0 0 1 1.57.39c.42.17.33 1.48-.11 1.73z"
          />
          <path
            className="prefix__cls-35"
            d="M249.39 372.59c-1.3.76-2.38 1.38-2.6 1.5-.58.34-1 .57-.88.17.07-.24.37-1.34.6-2.18a2.56 2.56 0 0 1 .78-1.25 4 4 0 0 0-.79 1.84c-.34 1.26-.58 1.75.81 1s2-1.04 2.08-1.08zm-8.45 5.05c-.49 0-.79.6-1.75.67s-1.5.1-1.79.34-.17.56.32.76a3.64 3.64 0 0 0 2.67-.08c.84-.49 1.37-1.72.55-1.69zm-1.17 3.15c-.07.11-.22.15-.42.17s-.33 0-.52 0c-.44 0-.84-.05-1-.2s-.37-.56-.16-.59h.2a4.74 4.74 0 0 0 .82.05 6.42 6.42 0 0 0 .83 0c.41-.02.35.42.25.57z"
          />
          <path
            className="prefix__cls-37"
            d="M232.61 376a1.79 1.79 0 0 1-.34-.93 4.4 4.4 0 0 1 .58-1.44 5.67 5.67 0 0 0 .05 1.52c.1.52-.21.94-.29.85z"
          />
          <path
            className="prefix__cls-34"
            d="M236.12 379.83a.89.89 0 0 1-.55.33 5 5 0 0 1-1.48-.68 4.69 4.69 0 0 1-.77-.6.87.87 0 0 1-.21-.33 1.85 1.85 0 0 1-.05-.67c0-.13.13-.07.18 0s.19.16.42.32l.68.47a10.5 10.5 0 0 0 1.59.87c.24.09.31.16.19.29zm10.7-5.33c-.12.58-.77.7-1.25.69a1.53 1.53 0 0 1-.53-.09c-.18-.11-.1-.33 0-.46a2.56 2.56 0 0 1 1.4-.67c.28.03.46.13.38.53z"
          />
          <path
            className="prefix__cls-35"
            d="M246.82 374.5c-.12.58-.77.7-1.25.69a1.53 1.53 0 0 1-.53-.09c-.18-.11-.1-.33 0-.46-.09.18.41.29.85.13s.77-.5.55-.8c.28.03.46.13.38.53z"
          />
          <path
            className="prefix__cls-36"
            d="M246.82 374.5c-.12.58-.77.7-1.25.69a1.16 1.16 0 0 0 1-.59c.14-.3 0-.59-.14-.63.29.03.47.13.39.53z"
          />
          <path
            className="prefix__cls-41"
            d="M255.86 366.49a3.32 3.32 0 0 1-1.55-.55l-4.37-2.52c-.79-.46-.86-.54-.46-.56a6.8 6.8 0 0 1 .76 0 3 3 0 0 1 1.24.39l3.85 2.23c2.22 1.31 1.44 1.16.53 1.01z"
          />
          <path
            className="prefix__cls-42"
            d="M259.07 369.16c-.24.21-.41-.32-.43-.72s0-.48.14-.56.3.34.37.56a1.18 1.18 0 0 1 .05.31.5.5 0 0 1-.13.41z"
          />
          <path
            className="prefix__cls-41"
            d="M241.13 378.23a2.11 2.11 0 0 1-.48.68 1.39 1.39 0 0 1-1.46.42c-.28-.16-.33-.4-.19-.59v-.05a1.46 1.46 0 0 1 .59-.26 4.33 4.33 0 0 0 .8-.37 2.23 2.23 0 0 1 .43-.2c.32-.08.4.14.31.37zm-2.76 1.06c-.24 0-.67 0-.79-.2s0-.23.12-.32a.77.77 0 0 1 .37-.12.83.83 0 0 1 .45.09.79.79 0 0 1 .15.12c.2.22-.03.38-.3.43zm-5.6-4.13a.79.79 0 0 1 0 .23c0 .13-.14.18-.29 0s-.07-.94.15-.9a.19.19 0 0 1 .07.06 1.08 1.08 0 0 1 .07.61z"
          />
          <path
            className="prefix__cls-34"
            d="M236.76 378.16h-.39a8.61 8.61 0 0 1-1.71-.75l-.25-.16a4.3 4.3 0 0 1-.95-.83c-.11-.17 0-.19.1-.24a.54.54 0 0 1 .53 0l.71.38a14.52 14.52 0 0 1 1.7 1c.17.24.31.54.26.6z"
          />

          <path
            className="prefix__cls-39"
            d="M251 371.81s.23.09.2.72-.2 2.15-.2 2.15.37-1.67.44-2.19a1.13 1.13 0 0 0-.22-.85z"
          />
          <path
            className="prefix__cls-38"
            d="M243.47 376.9a3.32 3.32 0 0 0-1.65 2.41 2.37 2.37 0 0 1 1.65-2.41zm11.32-6.45a3.27 3.27 0 0 0-1.41 2.56 2.38 2.38 0 0 1 1.41-2.56zm-7.12 3.47L251 372s.11.16.09.26zm3.78-2.17 3-1.79-2.93 2a.41.41 0 0 0-.07-.21zm1.34-7.75s3.31 1.9 3.65 2.11.92.64.79.68-1.27 0-1.27 0 .87.1 1.24.17a2.15 2.15 0 0 1 1.23.49s-.08-.26-.62-.6c-.81-.54-5.02-2.85-5.02-2.85zm-12.1 3.76c1.13 1.13 4.61 2.74 5.52 2.69a13.87 13.87 0 0 0 3.65-1.63 22.61 22.61 0 0 1-3.44 1.9c-1.03.28-5.08-2.06-5.73-2.96zm-.92 13.03c-.07.11-.22.15-.42.17.33 0 .44-.27.42-.45s-.1-.16-.58-.17a5.66 5.66 0 0 1-1.27-.14 4.74 4.74 0 0 0 .82.05 6.42 6.42 0 0 0 .83 0c.36-.05.3.39.2.54z"
          />

          <path
            className="prefix__cls-43"
            d="M235 376.23a6.29 6.29 0 0 0 3.9 1.16c2-.14 4.73-2.11 4.73-2.11a12.5 12.5 0 0 1-4.58 1.9 6.86 6.86 0 0 1-4.05-.95z"
          />
          <path
            className="prefix__cls-40"
            d="M240.8 378.15a1.28 1.28 0 0 1-.88.9c-.7.26-1-.12-.92-.31v-.05a.65.65 0 0 1 .27-.16l.32-.1a5 5 0 0 0 .64-.28l.16-.09c.26-.06.38-.06.41.09z"
          />
          <path
            className="prefix__cls-16"
            d="M240.38 378.37a1.09 1.09 0 0 1-.9.54c-.42 0-.34-.3-.17-.38l.32-.1a5 5 0 0 0 .64-.28c.2-.07.25 0 .11.22z"
          />
          <path
            className="prefix__cls-40"
            d="M238 379.14c-.34 0-.4-.23-.28-.37a.34.34 0 0 1 .12-.06.92.92 0 0 1 .25-.06h.22a.9.9 0 0 1 .23.08c.27.27-.22.44-.54.41z"
          />
          <path
            className="prefix__cls-16"
            d="M238.4 378.79a1 1 0 0 1-.53.12c-.21 0-.17-.14-.05-.2a.92.92 0 0 1 .25-.06h.22c.09.03.14.09.11.14z"
          />
          <path
            className="prefix__cls-40"
            d="M232.77 375.16a.79.79 0 0 1 0 .23c-.1 0-.2-.1-.27-.32s.11-.58.2-.55a.56.56 0 0 1 .09.22 1.56 1.56 0 0 1-.02.42z"
          />
          <path
            className="prefix__cls-16"
            d="M232.77 375.16c-.1.23-.23-.1-.22-.26s.11-.28.2-.16a1.56 1.56 0 0 1 .02.42z"
          />
          <path
            className="prefix__cls-35"
            d="M236.76 378.16h-.39a8.61 8.61 0 0 1-1.71-.75l-.25-.16a11.77 11.77 0 0 0 1.87.8c.35.06.38 0 .27-.18a1.42 1.42 0 0 0-.47-.44c-.17-.12-.89-.6-1.25-.81a14.52 14.52 0 0 1 1.7 1c.14.18.28.48.23.54zm-.64 1.67a.89.89 0 0 1-.55.33 5 5 0 0 1-1.48-.68 4.69 4.69 0 0 1-.77-.6 7.46 7.46 0 0 0 2.06 1.15c.32.08.42 0 .59-.2s0-.14-.59-.44a10.81 10.81 0 0 1-1.72-1.2l.68.47a10.5 10.5 0 0 0 1.59.87c.24.1.31.17.19.3zm10.09-8.78-1.72 3.74c-.34.59-3.93-1.23-6.08-2.74a37 37 0 0 0 4.58 2.3c.87.31 1.26.43 1.52 0s1.38-2.94 1.7-3.3z"
          />
          <path
            className="prefix__cls-44"
            d="M237.51 370.21a7.24 7.24 0 0 1 .9-1.1 7 7 0 0 1 1.65-1.44h.06a8.47 8.47 0 0 0 .78.66s-3.41 1.97-3.39 1.88z"
          />
          <path
            className="prefix__cls-35"
            d="m251.94 371.14-2.08 1.18a2.94 2.94 0 0 0 .87-.83 6.14 6.14 0 0 0 0-2c0-.48-.21-.52-.46-.41l1.11-.64c-.34.26-.29.54-.27.85s.06 1.19.14 1.68.42.3.59.24zm2.89-1.69-2.49 1.44c.74-.46 2.24-1.39 2.45-1.56a1.49 1.49 0 0 0 .29-1.15c0-.38-.24-.48-.63-.67a1.74 1.74 0 0 0-1-.21 1.91 1.91 0 0 1 1.57.39c.34.2.25 1.51-.19 1.76z"
          />
          <path
            className="prefix__cls-39"
            d="M246.06 370.21s4.74-3.11 6.28-3.8 1.91-.25 1.91-.25c-1-.2-2.57.76-4.17 1.72z"
          />
          <path
            className="prefix__cls-28"
            d="M240.79 367.32s2.42-1.36 4-2.32 3.55-1.87 4.5-1.67c0 0-.62-.41-2.47.38-1.53.66-6.03 3.61-6.03 3.61z"
          />
          <path
            className="prefix__cls-45"
            d="M259.07 369.16c-.24.21-.41-.32-.43-.72s0-.48.14-.56a2 2 0 0 0 .11 1c.13.2.3 0 .31-.15a.5.5 0 0 1-.13.43z"
          />
          <path
            className="prefix__cls-46"
            d="M258.94 368.37v.06a.06.06 0 0 1-.07 0 .29.29 0 0 1 0-.16c0-.05 0-.15.07-.18s.08 0 .09.08a.93.93 0 0 1-.09.2z"
          />
          <path className="prefix__cls-47" d="M259.07 368.4v.19a.05.05 0 0 0 0-.05.34.34 0 0 0 0-.14z" />
          <path
            className="prefix__cls-30"
            d="m384.67 155.92-1.44.83v.76l1.44-.83a.3.3 0 0 0 .16-.27v-.72zm-6.69 6.66 5.25-5.06v-.77l-.69-.39-5.49 6.33.93-.11z"
          />
          <path className="prefix__cls-16" d="m377.05 162.69 6.18-5.94-.92-.53-6.16 5.94.9.53z" />
          <path className="prefix__cls-30" d="M377.98 162.16v21.79l-.93.53v-21.79l.93-.53z" />
          <path className="prefix__cls-31" d="m377.05 184.48-.9-.52v-21.8l.9.53v21.79z" />
          <path
            className="prefix__cls-16"
            d="m384.67 155.47-.14-.07a.83.83 0 0 0-.78 0l-1.44.83.92.52 1.44-.83c.21-.12.21-.32 0-.45z"
          />
          <path
            className="prefix__cls-30"
            d="m339.41 129.65-1.44.83v.76l1.44-.83a.32.32 0 0 0 .16-.28v-.72zm-6.69 6.65 5.25-5.05v-.77l-.68-.4-5.49 6.33.92-.11z"
          />
          <path className="prefix__cls-16" d="m331.8 136.41 6.17-5.93-.91-.53-6.17 5.94.91.52z" />
          <path className="prefix__cls-30" d="M332.72 135.88v21.8l-.92.53v-21.8l.92-.53z" />
          <path className="prefix__cls-31" d="m331.8 158.21-.91-.53v-21.79l.91.52v21.8z" />
          <path
            className="prefix__cls-16"
            d="m339.41 129.2-.14-.08a.89.89 0 0 0-.78 0l-1.43.83.91.53 1.44-.83c.21-.13.21-.33 0-.45z"
          />
          <path
            className="prefix__cls-30"
            d="m294.15 103.53-1.44.83v.77l1.44-.84a.3.3 0 0 0 .16-.27v-.72zm-6.69 6.66 5.25-5.06v-.77l-.68-.39-5.49 6.33.92-.11z"
          />
          <path className="prefix__cls-16" d="m286.54 110.3 6.17-5.94-.91-.52-6.17 5.94.91.52z" />
          <path className="prefix__cls-30" d="M287.46 109.77v21.79l-.92.53V110.3l.92-.53z" />
          <path className="prefix__cls-31" d="m286.54 132.09-.91-.52v-21.79l.91.52v21.79z" />
          <path
            className="prefix__cls-16"
            d="M294.15 103.08 294 103a.83.83 0 0 0-.78 0l-1.44.83.91.52 1.44-.83c.23-.11.23-.31.02-.44z"
          />
          <path className="prefix__cls-30" d="m248.89 77.43-1.44.83V79l1.44-.83a.32.32 0 0 0 .16-.28v-.72z" />
          <path className="prefix__cls-30" d="m242.2 84.08 5.26-5.05v-.77l-.69-.4-5.49 6.33.92-.11z" />
          <path className="prefix__cls-16" d="m241.28 84.19 6.18-5.93-.92-.53-6.16 5.94.9.52z" />
          <path className="prefix__cls-30" d="M242.2 83.66v21.8l-.92.52V84.19l.92-.53z" />
          <path className="prefix__cls-31" d="m241.28 105.98-.9-.52V83.67l.9.52v21.79z" />
          <path
            className="prefix__cls-16"
            d="m248.89 77-.13-.08a.89.89 0 0 0-.78 0l-1.44.83.91.53 1.44-.83c.22-.15.22-.35 0-.45z"
          />
          <path
            className="prefix__cls-13"
            d="m473.78 253.17-12.18 7.04v70.36l12.18-7.04v-70.36zm-24.37 14.07-12.19 7.04v70.36l12.19-7.04v-70.36z"
          />
          <path className="prefix__cls-12" d="m437.22 274.28-28.43-16.42v70.36l28.43 16.42v-70.36z" />
          <path className="prefix__cls-28" d="M461.6 260.21v70.36l-2.06-1.19v-70.36l2.06 1.19z" />
          <path className="prefix__cls-39" d="M459.54 259.02v70.36l-10.13 5.88v-68.02l-2.06-1.18 12.19-7.04z" />
          <path
            className="prefix__cls-28"
            d="m457.53 320.01-2.03 1.18V264.9l2.03-1.17v56.28zm-4.06 2.34-2.03 1.18v-56.29l2.03-1.17v56.28z"
          />
          <path
            className="prefix__cls-40"
            d="m456.97 319.72-1.47.84V264.9l1.47-.85v55.67zm-4.06 2.34-1.47.84v-55.66l1.47-.85v55.67z"
          />
          <path className="prefix__cls-34" d="M457.53 330.56v-7.03l-6.09 3.52v7.03l6.09-3.52z" />
          <path
            className="prefix__cls-11"
            d="m408.79 257.86 36.56-21.1 28.43 16.41-12.18 7.04-2.06-1.19-12.19 7.04 2.06 1.18-12.19 7.04-28.43-16.42z"
          />
          <path
            className="prefix__cls-48"
            d="m445.41 267.24-2.06-1.18 16.19-9.35 2.06 1.19 8.18-4.73-24.43-14.11-32.56 18.8 24.44 14.11 8.18-4.73z"
          />
          <path className="prefix__cls-13" d="M445.35 239.06v2.39l-30.5 17.6-2.06-1.19 32.56-18.8z" />
          <path className="prefix__cls-49" d="m469.78 253.17-2.09 1.21-22.34-12.93v-2.39l24.43 14.11z" />
          <path
            className="prefix__cls-34"
            d="M469.72 316.49v4.7l-4.06 2.34v-4.69l4.06-2.35zm0-7.03v4.69l-4.06 2.34v-4.69l4.06-2.34zm0-9.38v4.69l-4.06 2.34v-4.69l4.06-2.34zm0-7.04v4.69l-4.06 2.35v-4.69l4.06-2.35zm0-9.38v4.69l-4.06 2.35v-4.69l4.06-2.35zm0-7.03v4.68l-4.06 2.35v-4.69l4.06-2.34zm0-9.39v4.7l-4.06 2.34v-4.69l4.06-2.35zm0-7.03v4.69l-4.06 2.35v-4.69l4.06-2.35z"
          />
          <path
            className="prefix__cls-50"
            d="m468.72 280.65-3.06 1.77v-3.45l3.06-1.77v3.45zm0 7.04-3.06 1.76v-3.44l3.06-1.77v3.45zm0-16.42-3.06 1.77v-3.45l3.06-1.77v3.45zm0-7.03-3.06 1.76v-3.44l3.06-1.77v3.45zm0 39.86-3.06 1.77v-3.45l3.06-1.77v3.45zm0-7.03-3.06 1.77v-3.45l3.06-1.77v3.45zm0 23.45-3.06 1.77v-3.45l3.06-1.77v3.45zm0-7.04-3.06 1.77v-3.45l3.06-1.76v3.44z"
          />
          <path
            className="prefix__cls-51"
            d="m469.72 260.21-1 .58v3.45l1 .66v-4.69zm0 7.03-1 .58v3.45l1 .67v-4.7zm0 9.39-1 .57v3.45l1 .66v-4.68zm0 7.03-1 .58v3.45l1 .66v-4.69zm0 9.38-1 .58v3.45l1 .66v-4.69zm0 7.04-1 .57v3.45l1 .67v-4.69zm0 9.38-1 .58v3.44l1 .67v-4.69zm0 7.03-1 .58v3.45l1 .67v-4.7z"
          />
          <path
            className="prefix__cls-34"
            d="M445.35 330.57v4.69l-4.06 2.34v-4.69l4.06-2.34zm0-7.04v4.69l-4.06 2.35v-4.69l4.06-2.35zm0-9.38v4.69l-4.06 2.35v-4.69l4.06-2.35zm0-7.03v4.69l-4.06 2.34v-4.69l4.06-2.34zm0-9.39v4.69l-4.06 2.35v-4.69l4.06-2.35zm0-7.03v4.69l-4.06 2.34v-4.69l4.06-2.34zm0-9.38v4.69l-4.06 2.34v-4.69l4.06-2.34zm0-7.04v4.69l-4.06 2.35v-4.69l4.06-2.35z"
          />
          <path
            className="prefix__cls-50"
            d="m444.35 294.73-3.06 1.76v-3.45l3.06-1.77v3.46zm0 7.03-3.06 1.77v-3.45l3.06-1.77v3.45zm0-16.42-3.06 1.77v-3.45l3.06-1.77v3.45zm0-7.03-3.06 1.77v-3.45l3.06-1.77v3.45zm0 39.87-3.06 1.76v-3.44l3.06-1.77v3.45zm0-7.04-3.06 1.77v-3.45l3.06-1.77v3.45zm0 23.45-3.06 1.77v-3.45l3.06-1.77v3.45zm0-7.03-3.06 1.76v-3.44l3.06-1.77v3.45z"
          />
          <path
            className="prefix__cls-51"
            d="m445.35 274.28-1 .58v3.45l1 .66v-4.69zm0 7.04-1 .57v3.45l1 .67v-4.69zm0 9.38-1 .57v3.46l1 .66v-4.69zm0 7.03-1 .58v3.45l1 .67v-4.7zm0 9.39-1 .57v3.45l1 .67v-4.69zm0 7.03-1 .58v3.45l1 .66v-4.69zm0 9.38-1 .58v3.45l1 .66v-4.69zm0 7.04-1 .57v3.45l1 .67v-4.69z"
          />
          <path
            className="prefix__cls-50"
            d="M429.1 330.57v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-7.04v4.69l4.06 2.35v-4.69l-4.06-2.35zm0-9.38v4.69l4.06 2.35v-4.69l-4.06-2.35zm0-7.03v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-9.39v4.69l4.06 2.35v-4.69l-4.06-2.35zm0-7.03v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-9.38v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-7.04v4.69l4.06 2.35v-4.69l-4.06-2.35z"
          />
          <path
            className="prefix__cls-52"
            d="m430.1 294.73 3.06 1.76v-3.45l-3.06-1.77v3.46zm0 7.03 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-16.42 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-7.03 3.06 1.77v-3.45l-3.06-1.77v3.45zm0 39.87 3.06 1.76v-3.44l-3.06-1.77v3.45zm0-7.04 3.06 1.77v-3.45l-3.06-1.77v3.45zm0 23.45 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-7.03 3.06 1.76v-3.44l-3.06-1.77v3.45z"
          />
          <path
            className="prefix__cls-34"
            d="m429.1 274.28 1 .58v3.45l-1 .66v-4.69zm0 7.04 1 .57v3.45l-1 .67v-4.69zm0 9.38 1 .57v3.46l-1 .66v-4.69zm0 7.03 1 .58v3.45l-1 .67v-4.7zm0 9.39 1 .57v3.45l-1 .67v-4.69zm0 7.03 1 .58v3.45l-1 .66v-4.69zm0 9.38 1 .58v3.45l-1 .66v-4.69zm0 7.04 1 .57v3.45l-1 .67v-4.69z"
          />
          <path
            className="prefix__cls-50"
            d="M420.98 325.9v4.7l4.06 2.34v-4.69l-4.06-2.35zm0-7.03v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-9.38v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-7.04v4.69l4.06 2.35v-4.69l-4.06-2.35zm0-9.38v4.69l4.06 2.35v-4.69l-4.06-2.35zm0-7.03v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-9.38v4.69l4.06 2.34V279l-4.06-2.34zm0-7.04v4.69l4.06 2.35v-4.69l-4.06-2.35z"
          />
          <path
            className="prefix__cls-52"
            d="m421.98 290.06 3.06 1.77v-3.45l-3.06-1.77v3.45zm0 7.04 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-16.42 3.06 1.77V279l-3.06-1.77v3.45zm0-7.03 3.06 1.76v-3.44l-3.06-1.77v3.45zm0 39.86 3.06 1.77v-3.45l-3.06-1.76v3.44zm0-7.03 3.06 1.77v-3.45l-3.06-1.77v3.45zm0 23.45 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-7.03 3.06 1.76v-3.45l-3.06-1.76v3.45z"
          />
          <path
            className="prefix__cls-34"
            d="m420.98 269.62 1 .58v3.45l-1 .66v-4.69zm0 7.04 1 .57v3.45l-1 .67v-4.69zm0 9.38 1 .57v3.45l-1 .67v-4.69zm0 7.03 1 .58v3.45l-1 .66v-4.69zm0 9.38 1 .58v3.45l-1 .66v-4.69zm0 7.04 1 .58v3.44l-1 .67v-4.69zm0 9.38 1 .58v3.45l-1 .66v-4.69zm0 7.03 1 .58v3.45l-1 .67v-4.7z"
          />
          <path
            className="prefix__cls-50"
            d="M412.85 321.24v4.7l4.06 2.34v-4.69l-4.06-2.35zm0-7.03v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-9.38v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-7.04v4.69l4.06 2.35v-4.69l-4.06-2.35zm0-9.38v4.69l4.06 2.35v-4.69l-4.06-2.35zm0-7.03v4.69l4.06 2.34v-4.69l-4.06-2.34zm0-9.39v4.7l4.06 2.34v-4.69l-4.06-2.35zm0-7.03v4.69l4.06 2.35v-4.69l-4.06-2.35z"
          />
          <path
            className="prefix__cls-52"
            d="m413.85 285.4 3.06 1.77v-3.45l-3.06-1.77v3.45zm0 7.04 3.06 1.76v-3.44l-3.06-1.77v3.45zm0-16.42 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-7.03 3.06 1.76v-3.44l-3.06-1.77v3.45zm0 39.86 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-7.03 3.06 1.77v-3.45l-3.06-1.77v3.45zm0 23.45 3.06 1.77v-3.45l-3.06-1.77v3.45zm0-7.04 3.06 1.77v-3.45l-3.06-1.76v3.44z"
          />
          <path
            className="prefix__cls-34"
            d="m412.85 264.96 1 .58v3.45l-1 .66v-4.69zm0 7.03 1 .58v3.45l-1 .67v-4.7zm0 9.39 1 .57v3.45l-1 .67v-4.69zm0 7.03 1 .58v3.45l-1 .66v-4.69zm0 9.38 1 .58v3.45l-1 .66v-4.69zm0 7.04 1 .57v3.45l-1 .67v-4.69zm0 9.38 1 .58v3.44l-1 .67v-4.69zm0 7.03 1 .58v3.45l-1 .67v-4.7z"
          />
          <path
            className="prefix__cls-53"
            d="m457.53 320.01-.56-.29v-55.67l.56-.32v56.28zm-4.06 2.34-.56-.29v-55.67l.56-.32v56.28z"
          />
          <path className="prefix__cls-54" d="m445.35 239.06 2.39 3.72-30.38 17.72-4.57-2.64 32.56-18.8z" />
          <path className="prefix__cls-16" d="m481.9 267.27 40.62 23.45v-30.49l-40.62-23.45v30.49z" />
          <path
            className="prefix__cls-40"
            d="M522.52 290.72v-7.03l-40.62-23.45v7.03l40.62 23.45zm-37.82-31.21v-4.69l35.02 20.21v4.69l-35.02-20.21zm0-7.04v-4.69L519.72 268v4.69l-35.02-20.22zm0-7.03v-4.69l35.02 20.21v4.69l-35.02-20.21z"
          />
          <path
            className="prefix__cls-41"
            d="m484.7 263.43 6.67 3.84v3.88l-6.67-3.84v-3.88zm9.45 5.47 6.66 3.84v3.88l-6.66-3.84v-3.88zm9.45 5.46 6.67 3.84v3.88l-6.67-3.84v-3.88zm9.45 5.47 6.67 3.84v3.88l-6.67-3.84v-3.88z"
          />
          <path className="prefix__cls-9" d="m555.01 271.96-32.49 18.76v-30.49l32.49-18.76v30.49z" />
          <path
            className="prefix__cls-41"
            d="M522.52 290.72v-7.03l32.49-18.76v7.03l-32.49 18.76zm29.77-26.59v-4.69l-26.97 15.59v4.69l26.97-15.59zm0-7.04v-4.69L525.32 268v4.69l26.97-15.6zm0-7.03v-4.69l-26.97 15.59v4.69l26.97-15.59z"
          />
          <path
            className="prefix__cls-55"
            d="m552.29 268.1-6.66 3.84v3.88l6.66-3.84v-3.88zm-10.15 5.86-6.67 3.84v3.89l6.67-3.84v-3.89zm-10.15 5.87-6.67 3.84v3.88l6.67-3.84v-3.88z"
          />
          <path className="prefix__cls-17" d="m555.01 241.47-40.62-23.45-32.49 18.76 40.62 23.45 32.49-18.76z" />
          <path className="prefix__cls-6" d="m514.39 220.37 36.56 21.1-28.43 16.42-36.56-21.11 28.43-16.41z" />
          <path className="prefix__cls-7" d="M514.39 222.71v-2.34l36.56 21.1-1.99 1.15-34.57-19.91z" />
          <path className="prefix__cls-9" d="m488.03 237.98 26.36-15.27v-2.34l-28.43 16.41 2.07 1.2z" />
          <path className="prefix__cls-54" d="m514.39 220.37 2.39 3.72-26.25 15.33-4.57-2.64 28.43-16.41z" />
          <path className="prefix__cls-9" d="m622 233.29-30.43 17.56v-30.48L622 202.8v30.49z" />
          <path
            className="prefix__cls-41"
            d="M591.57 250.85v-7.03L622 226.25v7.04l-30.43 17.56zm26.98-25v-4.69l-26.98 15.6v4.69l26.98-15.6zm0-7.03v-4.69l-26.98 15.59v4.69l26.98-15.59zm0-7.04v-4.69l-26.98 15.63v4.65l26.98-15.59z"
          />
          <path
            className="prefix__cls-55"
            d="m618.55 229.82-6.67 3.84v3.88l6.67-3.83v-3.89zm-10.16 5.87-6.66 3.84v3.88l6.66-3.84v-3.88zm-10.15 5.86-6.67 3.84v3.88l6.67-3.84v-3.88z"
          />
          <path className="prefix__cls-17" d="m622 202.8-40.62-23.45-22.31 12.88 32.5 18.76v9.38L622 202.8z" />
          <path className="prefix__cls-6" d="m581.38 181.69 36.55 21.11-26.36 15.22v-7.03L561.1 193.4l20.28-11.71z" />
          <path className="prefix__cls-54" d="m581.37 195.76 8.13-4.7 8.13 4.71-8.13 4.7-8.13-4.71z" />
          <path className="prefix__cls-7" d="M581.38 184.04v-2.35l36.55 21.11-1.99 1.15-34.56-19.91z" />
          <path className="prefix__cls-9" d="m563.2 194.57 18.18-10.53v-2.35L561.1 193.4l2.1 1.17z" />
          <path className="prefix__cls-54" d="m581.42 181.69 1.83 3.43L557 200.45l-4.02-2.34 28.44-16.42z" />
          <path className="prefix__cls-28" d="m555.01 271.96 4.07 2.35v-44.56l-44.69-25.8v14.07l40.62 23.45v30.49z" />
          <path className="prefix__cls-16" d="M555.01 271.96v-7.03l4.07 2.36v7.02l-4.07-2.35z" />
          <path className="prefix__cls-38" d="m591.57 210.99-44.68-25.8-32.5 18.76 44.69 25.8 32.49-18.76z" />
          <path className="prefix__cls-56" d="m546.89 187.53 40.62 23.46-28.43 16.41-40.62-23.45 28.43-16.42z" />
          <path className="prefix__cls-54" d="m546.88 201.64 8.13-4.7 8.13 4.71-8.12 4.69-8.14-4.7z" />
          <path className="prefix__cls-28" d="m546.89 189.88 38.65 22.24 1.97-1.13-40.62-23.46v2.35z" />
          <path className="prefix__cls-39" d="m518.46 203.95 28.43-16.42v2.35l-26.36 15.27-2.07-1.2z" />
          <path className="prefix__cls-54" d="m546.87 187.53 2.39 3.72L523 206.58l-4.57-2.63 28.44-16.42z" />
          <path className="prefix__cls-16" d="M538.76 196.95v-9.04l8.13 4.69v9.04l-8.13-4.69z" />
          <path className="prefix__cls-9" d="m555.01 196.95-8.12 4.69v-9.04l8.12-4.69v9.04z" />
          <path className="prefix__cls-17" d="m555.01 187.91-8.18-4.72-8.07 4.72 8.13 4.69 8.12-4.69z" />
          <path className="prefix__cls-16" d="M573.25 191.07v-9.04l8.12 4.69v9.04l-8.12-4.69z" />
          <path className="prefix__cls-9" d="m589.5 191.07-8.13 4.69v-9.04l8.13-4.69v9.04z" />
          <path className="prefix__cls-17" d="m589.5 182.03-8.19-4.72-8.06 4.72 8.12 4.69 8.13-4.69z" />
          <path className="prefix__cls-39" d="m591.57 255.54-32.49 18.77v-44.56l32.49-18.76v44.55z" />
          <path className="prefix__cls-9" d="M559.08 274.31v-7.02l32.49-18.79v7.04l-32.49 18.77z" />
          <path
            className="prefix__cls-34"
            d="M588.87 247.71v-4.69l-26.98 15.6v4.69l26.98-15.6zm0-7.03v-4.69l-26.98 15.59v4.69l26.98-15.59zm0-14.04v-4.69l-26.98 15.59v4.7l26.98-15.6zm0-7.04v-4.69l-26.98 15.6v4.69l26.98-15.6z"
          />
          <path
            className="prefix__cls-41"
            d="m588.87 251.69-6.67 3.83v3.88l6.67-3.83v-3.88zm-10.15 5.86-6.67 3.84v3.88l6.67-3.84v-3.88zm-10.16 5.86-6.67 3.84v3.88l6.67-3.84v-3.88z"
          />
          <path className="prefix__cls-34" d="M588.87 233.68v-4.69l-26.98 15.59v4.69l26.98-15.59z" />
          <path className="prefix__cls-16" d="m632.2 175.81 20.31 11.73V98.42L632.2 86.7v89.11z" />
          <path
            className="prefix__cls-40"
            d="m644.38 168.77 4.06 2.35v-14.07l-4.06-2.35v14.07zm0-18.76 4.06 2.35v-14.08l-4.06-2.34v14.07zm0-18.76 4.06 2.34v-14.07l-4.06-2.34v14.07zm0-18.76 4.06 2.35v-14.07l-4.06-2.35v14.07zm-8.12 51.59 4.06 2.35v-14.07l-4.06-2.35v14.07zm0 9.39 4.06 2.34v-4.69l-4.06-2.34v4.69zm8.12 4.69 4.06 2.34v-4.69l-4.06-2.34v4.69zm-8.12-32.84 4.06 2.35v-14.08l-4.06-2.34v14.07zm0-18.76 4.06 2.34v-14.07l-4.06-2.34v14.07zm0-18.76 4.06 2.35V96.08l-4.06-2.35v14.07z"
          />
          <path className="prefix__cls-16" d="M664.69 194.58 685 206.3v-89.11l-20.31-11.73v89.12z" />
          <path
            className="prefix__cls-40"
            d="m676.88 187.54 4.06 2.34v-14.07l-4.06-2.34v14.07zm0-18.76 4.06 2.34v-14.07l-4.06-2.35v14.08zm0-18.77 4.06 2.35v-14.07l-4.06-2.35v14.07zm0-18.75 4.06 2.34v-14.07l-4.06-2.34v14.07zm-8.12 51.59 4.06 2.34v-14.07l-4.06-2.34v14.07zm0 9.38 4.06 2.35v-4.69l-4.06-2.35v4.69zm8.12 4.69 4.06 2.35v-4.69l-4.06-2.35v4.69zm-8.12-32.84 4.06 2.35v-14.07l-4.06-2.35v14.07zm0-18.76 4.06 2.35V133.6l-4.06-2.35v14.07zm0-18.76 4.06 2.35v-14.07l-4.06-2.35v14.07z"
          />
          <path className="prefix__cls-9" d="M713.44 189.89 685 206.3v-89.11l28.44-16.42v89.12z" />
          <path
            className="prefix__cls-41"
            d="m693.13 187.54-4.06 2.34v-14.07l4.06-2.34v14.07zm0-18.76-4.06 2.34v-14.07l4.06-2.35v14.08zm0-18.77-4.06 2.35v-14.07l4.06-2.35v14.07zm0-18.75-4.06 2.34v-14.07l4.06-2.34v14.07zm8.12 51.59-4.06 2.34v-14.07l4.06-2.34v14.07zm0 9.38-4.06 2.35v-4.69l4.06-2.35v4.69zm-8.12 4.69-4.06 2.35v-4.69l4.06-2.35v4.69zm8.12-32.84-4.06 2.35v-14.07l4.06-2.35v14.07zm0-18.76-4.06 2.35V133.6l4.06-2.35v14.07zm0-18.76-4.06 2.35v-14.07l4.06-2.35v14.07zm8.13 51.59-4.07 2.35v-14.07l4.07-2.35v14.07zm0 9.39-4.07 2.34v-4.69l4.07-2.34v4.69zm0-28.15-4.07 2.35v-14.07l4.07-2.35v14.07zm0-18.76-4.07 2.34V128.9l4.07-2.34v14.07zm0-18.76-4.07 2.35v-14.07l4.07-2.35v14.07z"
          />
          <path className="prefix__cls-9" d="m652.51 98.42 2.16-1.25v89.12l-2.16 1.25V98.42z" />
          <path className="prefix__cls-28" d="m664.69 105.46 2.16-1.26-12.18-7.03v89.12l10.02 5.78v-86.61z" />
          <path
            className="prefix__cls-34"
            d="M662.54 184.1a6.41 6.41 0 0 0-2.89-5c-1.6-.92-2.9-.17-2.9 1.67v6.74l5.79 3.34v-6.75z"
          />
          <path className="prefix__cls-39" d="m657.62 174.23 4.06 2.34v-70.93l-4.06-2.35v70.94z" />
          <path className="prefix__cls-53" d="m657.62 103.29.86.5v69.9l-.86.54v-70.94z" />
          <path className="prefix__cls-40" d="m658.48 173.69 3.2 1.85v-69.9l-3.2-1.85v69.9z" />
          <path
            className="prefix__cls-17"
            d="m713.44 100.77-52.81-30.49L632.2 86.7l20.31 11.72 2.16-1.25 12.18 7.03-2.16 1.26L685 117.19l28.44-16.42z"
          />
          <path
            className="prefix__cls-57"
            d="m685 114.84-16.25-9.38 2.04-1.18-16.12-9.3-2.16 1.1-16.25-9.39 24.37-14.07 48.75 28.15L685 114.84z"
          />
          <path className="prefix__cls-9" d="m636.26 86.69 24.37-14.07v2.35l-22.34 12.9-2.03-1.18z" />
          <path className="prefix__cls-7" d="m709.38 100.77-2.03 1.17-46.72-26.97v-2.35l48.75 28.15z" />
          <path className="prefix__cls-54" d="m660.63 72.62 2.39 3.72-22.19 12.99-4.57-2.63 24.37-14.08z" />
          <path
            className="prefix__cls-9"
            d="m670.79 104.28-.01 2.35-2.03-1.17 2.04-1.18zM370.2 247.34l10.15-5.86-2.03-1.17-10.15 5.86 2.03 1.17zm14.22-3.52-36.56-21.1 20.31-11.73 36.55 21.11-20.3 11.72z"
          />
          <path
            className="prefix__cls-9"
            d="m343.79 232.06 10.16-5.87-2.03-1.17-10.16 5.86 2.03 1.18zm16.37-.14-4.18 2.52 2.03 1.18 4.27-2.47-2.12-1.23z"
          />
          <path className="prefix__cls-13" d="M341.76 209.82v23.45l2.03-1.17v-23.46l-2.03 1.18z" />
          <path className="prefix__cls-12" d="M341.76 209.82v23.45l-2.03-1.17v-23.46l2.03 1.18z" />
          <path className="prefix__cls-28" d="m351.92 236.79 2.03 1.17v-7.03l-2.03-1.18v7.04z" />
          <path className="prefix__cls-39" d="m353.95 237.96 4.15-2.4v-6.93l-4.15 2.3v7.03z" />
          <path className="prefix__cls-16" d="m351.92 229.75 2.03 1.18v-4.69l-2.03-1.18v4.69z" />
          <path className="prefix__cls-17" d="m355.98 222.72-4.06 2.34 2.03 1.18 4.15-2.3-2.12-1.22z" />
          <path className="prefix__cls-9" d="m358.1 223.94-4.15 2.3v4.69l4.15-2.3v-4.69z" />
          <path className="prefix__cls-41" d="m354.45 226.53 3.15-1.74v3.55l-3.15 1.74v-3.55z" />
          <path
            stroke="#32364f"
            strokeLinejoin="round"
            strokeWidth={0.5}
            strokeLinecap="round"
            fill="none"
            d="M352.93 229.57v5.2l-1.01.65v-7.28"
          />
          <path fill="#61466d" d="m351.18 229.49.67.38v-2.24l-.67-.42v2.28z" />
          <path className="prefix__cls-34" d="m351.85 229.87.66-.36v-1.3l.85-.81v-.61l-1.51.84v2.24z" />
          <path fill="#856a93" d="m353.36 226.79-1.51.84-.67-.42 1.52-.81.66.39z" />
          <path
            className="prefix__cls-9"
            d="m366 235.25 6.77 3.92a1.05 1.05 0 0 1 0 2l-16 9.21c-4.79 2.77-14.09-3.78-10.26-5.92l16-9.22a3.82 3.82 0 0 1 3.49.01z"
          />
          <path
            className="prefix__cls-34"
            d="M351.25 237.74a.4.4 0 0 1-.06.21c-.14.25-.44.57-.55.55s-.16-.17-.19-.34a2.11 2.11 0 0 1 0-.25c0-.28.11-.91.49-1.08a.18.18 0 0 1 .22 0 .34.34 0 0 1 .11.18 1.59 1.59 0 0 1-.02.73z"
          />
          <path
            className="prefix__cls-35"
            d="M351.2 238c-.14.25-.44.57-.55.55s-.16-.17-.19-.34a2.11 2.11 0 0 1 0-.25c0-.28.11-.91.49-1.08a.18.18 0 0 1 .22 0v.11c-.26.12-.33.53-.31.84s.14.32.34.17z"
          />
          <path
            className="prefix__cls-36"
            d="M351.26 237.1c-.09-.1-.33-.11-.53.17a2 2 0 0 0-.27.93 2.11 2.11 0 0 1 0-.25c0-.28.11-.91.49-1.08.14-.07.27.13.31.23z"
          />
          <path className="prefix__cls-37" d="m371.47 239.51-2.63-1.52 1.46-.85 1.76 1.02-.59 1.35z" />
          <path
            className="prefix__cls-23"
            d="m370.36 239.15.38-.75-.9-.53a1.09 1.09 0 0 0-1.09.1 3.74 3.74 0 0 0-1.6 2.95 1.3 1.3 0 0 0 .51 1.19l.93.53.39-.79a3.83 3.83 0 0 0 1.38-2.7z"
          />
          <path
            className="prefix__cls-24"
            d="M371.3 239.61a3.9 3.9 0 0 1-1.25 2.7 2 2 0 0 1-.35.25c-.89.52-1.61 0-1.61-1.09a3.85 3.85 0 0 1 1-2.45 2.58 2.58 0 0 1 .61-.5c.88-.52 1.6-.03 1.6 1.09z"
          />
          <path
            className="prefix__cls-25"
            d="M369.69 239.19c.57-.33 1 0 1 .76a2.43 2.43 0 0 1-1 1.94c-.57.32-1 0-1-.76a2.4 2.4 0 0 1 1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M370.13 240.28a1.16 1.16 0 0 1-.44.93.26.26 0 0 1-.28 0 .51.51 0 0 1-.16-.43 1.17 1.17 0 0 1 .44-.93.26.26 0 0 1 .18 0c.13-.01.26.15.26.43z"
          />
          <path
            className="prefix__cls-27"
            d="M370 240.25a1.12 1.12 0 0 1-.44.92.25.25 0 0 1-.18.05.51.51 0 0 1-.16-.43 1.17 1.17 0 0 1 .44-.93.26.26 0 0 1 .18 0 .5.5 0 0 1 .16.39z"
          />
          <path
            className="prefix__cls-25"
            d="M371.3 239.61a3.9 3.9 0 0 1-1.25 2.7 4.72 4.72 0 0 0 1-2c.13-.64.08-1.57-.47-1.8s-1.29.26-1.52.48a2.58 2.58 0 0 1 .61-.5c.91-.49 1.63 0 1.63 1.12z"
          />
          <path className="prefix__cls-37" d="m359.77 246.26-2.63-1.52 1.46-.84 2.63 1.52-1.46.84z" />
          <path
            className="prefix__cls-23"
            d="m358.69 245.88.38-.75-.9-.52a1.09 1.09 0 0 0-1.09.1 3.71 3.71 0 0 0-1.61 2.95 1.3 1.3 0 0 0 .52 1.19l.92.53.4-.79a3.83 3.83 0 0 0 1.38-2.71z"
          />
          <path
            className="prefix__cls-24"
            d="M359.63 246.35a3.82 3.82 0 0 1-1.26 2.69 2.8 2.8 0 0 1-.35.25c-.89.51-1.61 0-1.61-1.1a3.91 3.91 0 0 1 1-2.45 2.35 2.35 0 0 1 .61-.5c.89-.51 1.61-.01 1.61 1.11z"
          />
          <path
            className="prefix__cls-25"
            d="M358 245.92c.56-.32 1 0 1 .76a2.43 2.43 0 0 1-1 1.94c-.57.33-1 0-1-.75a2.44 2.44 0 0 1 1-1.95z"
          />
          <path
            className="prefix__cls-26"
            d="M358.46 247a1.17 1.17 0 0 1-.44.93.26.26 0 0 1-.28 0 .51.51 0 0 1-.16-.43 1.13 1.13 0 0 1 .44-.93.33.33 0 0 1 .18 0c.15.01.26.18.26.43z"
          />
          <path
            className="prefix__cls-27"
            d="M358.36 247a1.17 1.17 0 0 1-.44.93.33.33 0 0 1-.18.05.51.51 0 0 1-.16-.43 1.13 1.13 0 0 1 .44-.93.33.33 0 0 1 .18 0 .51.51 0 0 1 .16.38z"
          />
          <path
            className="prefix__cls-25"
            d="M359.63 246.35a3.82 3.82 0 0 1-1.26 2.69 4.41 4.41 0 0 0 1-2c.14-.65.09-1.57-.47-1.8s-1.28.25-1.51.48a2.35 2.35 0 0 1 .61-.5c.91-.49 1.63.01 1.63 1.13z"
          />
          <path
            className="prefix__cls-38"
            d="M373.08 237.1v.21a2.18 2.18 0 0 1-1.1 1.9l-.51.3c0-1.31-.85-1.88-1.9-1.27a4.39 4.39 0 0 0-1.89 3.15v.31l-7.9 4.56a2 2 0 0 0 0-.25c-.1-1.13-.91-1.58-1.89-1l-.18.12a4 4 0 0 0-1.16 1.35 4.65 4.65 0 0 0-.45 1.15 4.3 4.3 0 0 0-.09.47.75.75 0 0 1-.42.59 6.76 6.76 0 0 1-6.33-.21l-1.14-.66a3.88 3.88 0 0 1-1.93-3.35v-.54a3.69 3.69 0 0 1 0-.58l.06-.36a4.63 4.63 0 0 1 .58-1.44l.18-.26a4.47 4.47 0 0 1 1-1l2.82-2 2.93-3a36.74 36.74 0 0 1 5.12-3.41 9.68 9.68 0 0 1 4.42-1.21 6.56 6.56 0 0 1 1.34.1h.15a3.86 3.86 0 0 1 1.25.55l5.77 3.33a2.33 2.33 0 0 1 .21.15 1 1 0 0 1 .24.21 3.51 3.51 0 0 1 .51.8 3.27 3.27 0 0 1 .31 1.29z"
          />
          <path
            className="prefix__cls-28"
            d="M346.17 243.91a3.69 3.69 0 0 1 0-.58l.06-.36a4.63 4.63 0 0 1 .58-1.44l.18-.26a4.57 4.57 0 0 1 .64-.68c-.74.81-.75 2.09 1.33 3.5a5.57 5.57 0 0 0 4.64.95l-.53 4.29a6.77 6.77 0 0 1-3.87-.87l-1.14-.66a3.88 3.88 0 0 1-1.93-3.35z"
          />
          <path
            className="prefix__cls-39"
            d="M352 249.29c-.38-1.48.45-3.85 1.55-4.32a10.22 10.22 0 0 0 4.07-1.86l.87-.49 1.71-3.73-.67-.17s0-.32.52-.68 5.39-3.27 6.16-3.62 1.29-.71 2-.43a13.11 13.11 0 0 1 4 .92 3.51 3.51 0 0 1 .51.8 3.27 3.27 0 0 1 .29 1.35v.21a2.18 2.18 0 0 1-1.1 1.9l-.51.3c0-1.31-.85-1.88-1.9-1.27a4.39 4.39 0 0 0-1.89 3.15v.31l-7.9 4.56a2 2 0 0 0 0-.25c-.1-1.13-.91-1.58-1.89-1l-.18.12a4 4 0 0 0-1.16 1.35 4.65 4.65 0 0 0-.45 1.15 4.3 4.3 0 0 0-.09.47.75.75 0 0 1-.42.59 6.68 6.68 0 0 1-3.52.64z"
          />
          <path
            className="prefix__cls-38"
            d="M349.39 239.89a15.65 15.65 0 0 1 1.57-1.25l5.89 3.74a23.7 23.7 0 0 1-3.37-1.61 13.21 13.21 0 0 1-2.48-1.87c-.25-.09-1.61.99-1.61.99z"
          />
          <path
            className="prefix__cls-39"
            d="M360.26 242.32a2.71 2.71 0 0 1-.56.31c-.26.08-.21-.24.19-1.6s.6-2.12 1.2-2.54 5-2.94 5.56-3.29a2.09 2.09 0 0 1 1.9-.25c.63.26 1 .49 1 1s.15.84-.88 1.44-8.41 4.93-8.41 4.93z"
          />
          <path
            className="prefix__cls-34"
            d="M355.24 246.68c-.54.7-1.21 1.14-2.89 1a9.29 9.29 0 0 1-4-1.53 4.27 4.27 0 0 1-1.56-1.46 3.86 3.86 0 0 1-.55-1.33l.06-.36a4.63 4.63 0 0 1 .58-1.44l.18-.26a3.53 3.53 0 0 0 0 .81 15.62 15.62 0 0 1 .09 1.68c0 .49.29 1.06 1.59 1.83 1.54.91 2.13.77 2.73.59a5 5 0 0 1 1-.18 9.35 9.35 0 0 0 1.13-.13c.64-.15 1-.6 1.47-.54.66.06.5.9.17 1.32z"
          />
          <path
            className="prefix__cls-35"
            d="M352.41 246a6.54 6.54 0 0 0-1.33.38c-.28.1-.54.18-1.4-.12a7.75 7.75 0 0 1-2.26-1.39 1 1 0 0 1-.35-1.11c0 .49.29 1.06 1.59 1.83 1.54.91 2.13.77 2.73.59a5 5 0 0 1 1-.18z"
          />
          <path
            className="prefix__cls-40"
            d="m360.21 238.92-1.71 3.73c-.34.59-3.94-1.23-6.08-2.74-1-.73-1.73-1.39-1.57-1.67a21 21 0 0 1 2.93-3l.34.33a10.91 10.91 0 0 0 .89.74 20.54 20.54 0 0 0 5.2 2.61z"
          />
          <path
            className="prefix__cls-41"
            d="m368.84 237.31-2.49 1.44-.48.28-2 1.15-.47.27-2.6 1.55c-.59.33-1 .56-.88.16l.59-2.18a2.64 2.64 0 0 1 .78-1.25l.18-.14a2 2 0 0 1 .24-.16l2-1.15h.06l.5-.29 1.12-.64.37-.22 1.17-.67a2 2 0 0 1 .48-.21 1.84 1.84 0 0 1 1.56.38c.39.13.31 1.43-.13 1.68z"
          />
          <path
            className="prefix__cls-35"
            d="M363.39 240.46 360.8 242c-.59.33-1 .56-.88.16l.59-2.18a2.64 2.64 0 0 1 .78-1.25 4.1 4.1 0 0 0-.79 1.85c-.34 1.25-.57 1.74.82 1s1.99-1.08 2.07-1.12zM355 245.5c-.5 0-.8.6-1.76.68s-1.49.09-1.78.33-.17.56.32.76a3.59 3.59 0 0 0 2.67-.08c.78-.49 1.32-1.72.55-1.69zm-1.23 3.16c-.06.1-.21.14-.41.17h-.53c-.43 0-.84 0-.95-.2s-.37-.56-.16-.58h.2a5.65 5.65 0 0 0 .83.06h.83c.45 0 .3.39.19.55z"
          />
          <path
            className="prefix__cls-37"
            d="M346.61 243.9a1.84 1.84 0 0 1-.34-.93 4.63 4.63 0 0 1 .58-1.44 5.66 5.66 0 0 0 0 1.52c.15.48-.15.95-.24.85z"
          />
          <path
            className="prefix__cls-34"
            d="M350.12 247.69a.84.84 0 0 1-.55.33 4.93 4.93 0 0 1-1.47-.68 3.89 3.89 0 0 1-.77-.6.76.76 0 0 1-.21-.33 1.83 1.83 0 0 1-.05-.67c0-.13.12-.06.18 0l.41.33c.16.12.37.27.68.47a10.08 10.08 0 0 0 1.58.87c.25.09.33.15.2.28zm10.7-5.33c-.12.58-.76.71-1.24.69a1.43 1.43 0 0 1-.53-.09c-.19-.11-.1-.33 0-.46a2.59 2.59 0 0 1 1.4-.67c.28-.01.46.17.37.53z"
          />
          <path
            className="prefix__cls-35"
            d="M360.82 242.36c-.12.58-.76.71-1.24.69a1.43 1.43 0 0 1-.53-.09c-.19-.11-.1-.33 0-.46-.09.18.4.29.84.13s.77-.5.56-.8c.28-.01.46.17.37.53z"
          />
          <path
            className="prefix__cls-36"
            d="M360.82 242.36c-.12.58-.76.71-1.24.69a1.13 1.13 0 0 0 1-.59c.15-.3 0-.59-.13-.63.28-.01.46.17.37.53z"
          />
          <path
            className="prefix__cls-41"
            d="M369.86 234.36a3.36 3.36 0 0 1-1.55-.56l-4.31-2.52c-.8-.46-.86-.54-.47-.55a6.87 6.87 0 0 1 .77 0 3.07 3.07 0 0 1 1.24.4l3.85 2.22c2.16 1.31 1.38 1.15.47 1.01z"
          />
          <path
            className="prefix__cls-42"
            d="M373.08 237c-.25.21-.41-.32-.44-.72s0-.48.15-.55.3.33.36.55a1.3 1.3 0 0 1 .06.31.56.56 0 0 1-.13.41z"
          />
          <path
            className="prefix__cls-41"
            d="M355.14 246.09a2.14 2.14 0 0 1-.49.68 1.39 1.39 0 0 1-1.46.42.39.39 0 0 1-.18-.59 1.53 1.53 0 0 1 .59-.26 4 4 0 0 0 .8-.37 2.23 2.23 0 0 1 .43-.2c.32-.13.39.07.31.32zm-2.76 1.06c-.25 0-.67 0-.8-.2s0-.23.12-.32a.77.77 0 0 1 .37-.12.91.91 0 0 1 .45.09.44.44 0 0 1 .15.12c.2.22-.02.39-.29.43zm-5.6-4.15a.79.79 0 0 1 0 .22c-.05.13-.14.18-.29 0s-.07-.94.15-.89h.07a1.19 1.19 0 0 1 .07.67z"
          />
          <path
            className="prefix__cls-34"
            d="M350.76 246h-.38a8.87 8.87 0 0 1-1.71-.76l-.25-.16a4.18 4.18 0 0 1-1-.83c-.1-.16 0-.19.1-.24a.6.6 0 0 1 .53 0l.71.38a17.31 17.31 0 0 1 1.7 1c.22.27.35.61.3.61z"
          />
          <path
            className="prefix__cls-39"
            d="M365 239.68s.23.08.2.71-.2 2.16-.2 2.16.36-1.68.43-2.2a1.06 1.06 0 0 0-.21-.84z"
          />
          <path
            className="prefix__cls-38"
            d="M357.48 244.76a3.31 3.31 0 0 0-1.66 2.41 2.39 2.39 0 0 1 1.66-2.41zm11.31-6.45a3.3 3.3 0 0 0-1.4 2.56 2.37 2.37 0 0 1 1.4-2.56zm-7.12 3.48 3.37-1.95s.11.16.08.26zm3.78-2.18 3-1.79-2.94 2a.36.36 0 0 0-.06-.21zm1.34-7.79 3.66 2.11c.33.21.92.64.78.68s-1.27 0-1.27 0 .88.1 1.25.17a2.1 2.1 0 0 1 1.22.49s-.08-.26-.62-.6c-.81-.49-5.02-2.85-5.02-2.85zm-12.09 3.8c1.12 1.13 4.6 2.75 5.51 2.69a13.87 13.87 0 0 0 3.66-1.62 21.88 21.88 0 0 1-3.44 1.89c-1.04.25-5.09-2.06-5.73-2.96zm-.93 13.04c-.06.1-.21.14-.41.17a.43.43 0 0 0 .42-.45c0-.18-.1-.16-.59-.17a5.66 5.66 0 0 1-1.27-.14 5.65 5.65 0 0 0 .83.06h.83c.45 0 .3.37.19.53z"
          />
          <path
            className="prefix__cls-43"
            d="M349 244.09a6.27 6.27 0 0 0 3.9 1.16c2-.14 4.73-2.11 4.73-2.11A12.49 12.49 0 0 1 353 245a6.82 6.82 0 0 1-4-.91z"
          />
          <path
            className="prefix__cls-40"
            d="M354.8 246a1.25 1.25 0 0 1-.88.9c-.7.26-1-.12-.91-.31a1.13 1.13 0 0 1 .27-.16l.32-.1a4.07 4.07 0 0 0 .65-.28l.15-.09c.25-.15.38-.11.4.04z"
          />
          <path
            className="prefix__cls-16"
            d="M354.39 246.23a1.13 1.13 0 0 1-.91.54c-.41 0-.33-.3-.17-.38l.32-.1a4.07 4.07 0 0 0 .65-.28c.19-.07.24-.01.11.22z"
          />
          <path
            className="prefix__cls-40"
            d="M352 247c-.35 0-.41-.23-.29-.37l.12-.06a1 1 0 0 1 .25-.06h.23a.72.72 0 0 1 .22.08c.28.22-.2.41-.53.41z"
          />
          <path
            className="prefix__cls-16"
            d="M352.4 246.65a.91.91 0 0 1-.53.12c-.21 0-.17-.14-.05-.2a1 1 0 0 1 .25-.06h.23c.08.04.14.09.1.14z"
          />
          <path
            className="prefix__cls-40"
            d="M346.78 243a.79.79 0 0 1 0 .22c-.1 0-.2-.1-.27-.32s.12-.58.2-.55a.44.44 0 0 1 .09.22 1.69 1.69 0 0 1-.02.43z"
          />
          <path
            className="prefix__cls-16"
            d="M346.78 243c-.1.23-.24-.11-.22-.26s.11-.29.19-.17a1.69 1.69 0 0 1 .03.43z"
          />
          <path
            className="prefix__cls-35"
            d="M350.76 246h-.38a8.87 8.87 0 0 1-1.71-.76l-.25-.16a11.19 11.19 0 0 0 1.86.8c.36.06.39 0 .28-.18a1.52 1.52 0 0 0-.47-.44c-.18-.12-.89-.6-1.25-.81a17.31 17.31 0 0 1 1.7 1c.14.21.27.55.22.55zm-.64 1.69a.84.84 0 0 1-.55.33 4.93 4.93 0 0 1-1.47-.68 3.89 3.89 0 0 1-.77-.6 7.32 7.32 0 0 0 2.06 1.15.51.51 0 0 0 .58-.19c.16-.15 0-.15-.58-.45a10.81 10.81 0 0 1-1.72-1.2c.16.12.37.27.68.47a10.08 10.08 0 0 0 1.58.87c.24.11.32.17.19.3zm10.09-8.77-1.71 3.73c-.34.59-3.94-1.23-6.08-2.74a36.9 36.9 0 0 0 4.57 2.3c.87.31 1.26.44 1.53 0s1.37-2.94 1.69-3.29z"
          />
          <path
            className="prefix__cls-44"
            d="M351.51 238.07a7.24 7.24 0 0 1 .9-1.1 7 7 0 0 1 1.66-1.44h.05a10.05 10.05 0 0 0 .78.66s-3.4 1.97-3.39 1.88z"
          />
          <path
            className="prefix__cls-35"
            d="m365.94 239-2.07 1.18a3.15 3.15 0 0 0 .87-.84 5.87 5.87 0 0 0 0-2c0-.48-.21-.52-.46-.41l1.12-.64a.79.79 0 0 0-.27.85c0 .39.06 1.19.13 1.68s.42.3.59.24zm2.9-1.69-2.49 1.44c.73-.46 2.23-1.39 2.44-1.56a1.48 1.48 0 0 0 .29-1.14c0-.38-.24-.49-.62-.68a1.84 1.84 0 0 0-1-.21 1.84 1.84 0 0 1 1.56.38c.34.22.26 1.52-.18 1.77z"
          />
          <path
            className="prefix__cls-39"
            d="M360.06 238.07s4.75-3.1 6.29-3.8 1.9-.25 1.9-.25c-.95-.2-2.57.77-4.17 1.73z"
          />
          <path
            className="prefix__cls-28"
            d="M354.8 235.19s2.41-1.37 4-2.33 3.54-1.86 4.5-1.66c0 0-.62-.42-2.47.37a68.42 68.42 0 0 0-6.03 3.62z"
          />
          <path
            className="prefix__cls-45"
            d="M373.08 237c-.25.21-.41-.32-.44-.72s0-.48.15-.55a1.94 1.94 0 0 0 .1 1c.13.2.3 0 .32-.15a.56.56 0 0 1-.13.42z"
          />
          <path
            className="prefix__cls-46"
            d="M373 236.23v.07c0 .01-.06 0-.07-.05a.29.29 0 0 1 0-.16c0-.05 0-.15.08-.18s.08 0 .08.08a.93.93 0 0 1-.09.24z"
          />
          <path className="prefix__cls-47" d="M373.08 236.26v.18a.05.05 0 0 0 0-.05.32.32 0 0 0 0-.13z" />
          <path className="prefix__cls-13" d="M368.17 225.06v23.45l2.03-1.17v-23.45l-2.03 1.17z" />
          <path className="prefix__cls-12" d="M368.17 225.06v23.45l-2.04-1.17v-23.45l2.04 1.17z" />
          <path className="prefix__cls-13" d="M384.41 215.69v23.45l2.03-1.17v-23.46l-2.03 1.18z" />
          <path className="prefix__cls-12" d="M384.41 215.69v23.45l-2.03-1.17v-23.46l2.03 1.18z" />
          <path className="prefix__cls-12" d="m404.72 232.1-36.55-21.11-.01-21.1 36.56 21.1v21.11z" />
          <path
            className="prefix__cls-50"
            d="M402.69 212.16v16.42l-7.75-4.46v-16.41l7.75 4.45zm-24.76-14.29v16.41l-7.75-4.45v-16.42l7.75 4.46zm15.11 8.73v16.41l-6.09-3.51v-16.42l6.09 3.52zm-7.1-4.11v16.42l-6.1-3.52v-16.42l6.1 3.52z"
          />
          <path
            className="prefix__cls-52"
            d="m387.95 219.01 5.09 2.94V206.6l-5.09-2.94v15.35zm7.99 4.63 6.75 3.88v-15.36l-6.75-3.88v15.36zm-15.1-8.74 5.1 2.94v-15.35l-5.1-2.94v15.35zm-9.66-5.56 6.75 3.88v-15.35l-6.75-3.88v15.35z"
          />
          <path
            className="prefix__cls-34"
            d="m394.94 207.71 1 .57v15.36l-1 .48v-16.41zm-7.99-4.63 1 .58v15.35l-1 .49v-16.42zm-7.11-4.11 1 .58v15.35l-1 .49v-16.42zm-9.66-5.56 1 .58v15.35l-1 .49v-16.42z"
          />
          <path className="prefix__cls-38" d="m335.67 206.3 36.56 21.11 48.74-28.15-36.56-21.1-48.74 28.14z" />
          <path className="prefix__cls-56" d="m339.73 206.3 32.5 18.76 44.68-25.8-32.5-18.76-44.68 25.8z" />
          <path className="prefix__cls-28" d="M384.41 182.85v-2.35l32.5 18.76-2.03 1.17-30.47-17.58z" />
          <path className="prefix__cls-39" d="m341.76 207.47 42.65-24.62v-2.35l-44.68 25.8 2.03 1.17z" />
          <path className="prefix__cls-54" d="m384.41 180.5 2.39 3.72-42.5 24.71-4.57-2.63 44.68-25.8z" />
          <path className="prefix__cls-28" d="M335.67 206.3v2.35l36.56 21.1v-2.34l-36.56-21.11z" />
          <path className="prefix__cls-39" d="m372.23 229.75 48.74-28.14v-2.35l-48.74 28.15v2.34z" />
          <path className="prefix__cls-13" d="M420.97 201.61v21.11l-16.25 9.38v-21.11l16.25-9.38z" />
          <path className="prefix__cls-12" d="M370.2 223.89v-7.03l2.03 1.17v7.03l-2.03-1.17z" />
          <path className="prefix__cls-11" d="m416.9 192.23-44.67 25.8-2.03-1.17 44.66-25.81 2.04 1.18z" />
          <path className="prefix__cls-13" d="M416.9 199.26v-7.03l-44.67 25.8v7.03l44.67-25.8z" />
          <path
            className="prefix__cls-17"
            d="m397.54 208 .55-.32v.23c0 .5.11.71.46.51a.76.76 0 0 0 .41-.67.61.61 0 0 0-.33-.6l-.73-.45a.91.91 0 0 1-.41-.81 2 2 0 0 1 1.07-1.67c.82-.47 1.06-.1 1.06.37a3.36 3.36 0 0 1-.07.6l-.54.31v-.22c0-.49-.14-.68-.46-.5a.73.73 0 0 0-.39.63.47.47 0 0 0 .22.46l.82.51a1 1 0 0 1 .46.86 2.06 2.06 0 0 1-1.11 1.71c-.84.48-1.08.13-1.08-.36a3.15 3.15 0 0 1 .07-.59zm3.14-4.46-.75.43v-.55l2.2-1.27v.55l-.74.43v4.09l-.71.4zm2.44-1.96.81-.47.86 4.14-.71.41-.13-.75-.85.49-.12.9-.72.41zm.75 2.85-.33-2.13-.33 2.5zm1.8-3.77-.75.43v-.55l2.2-1.27v.55l-.74.43v4.09l-.71.41zm1.93-1.66.7-.41v4.64l-.7.4zm1.4 2.33v-1.64a2.31 2.31 0 0 1 1.15-2.2c.42-.24 1.15-.55 1.15.87V200a2.36 2.36 0 0 1-1.15 2.21c-.48.27-1.15.51-1.15-.88zm1.57-.63v-2.11c0-.59-.14-.7-.42-.54s-.41.42-.41 1v2.11c0 .58.13.67.41.5s.39-.38.39-.96zm1.37-4.21.57-.33 1.13 2.45c0-.27-.07-.65-.07-1.37v-1.69l.63-.36v4.64l-.58.33-1.12-2.38c0 .31.07.67.07 1.61v1.37l-.62.36zM374.92 221v-1.66a2.29 2.29 0 0 1 1.13-2.19c.74-.42 1-.11 1 .43a3.11 3.11 0 0 1-.06.59l-.58.33v-.23c0-.51-.11-.7-.33-.58s-.39.41-.39 1v2.14c0 .58.1.7.39.53a.85.85 0 0 0 .34-.74v-.46l.65-.37v.43a1.85 1.85 0 0 1-1 1.68c-.46.27-1.15.51-1.15-.9zm2.69-4.7.71-.41v2l.84-.48v-2l.71-.41v4.67l-.71.41v-2.16l-.84.49v2.16l-.71.41zm3.58-2.06.82-.47.86 4.17-.72.41-.13-.76-.85.49-.12.91-.72.42zm.75 2.87-.32-2.14-.33 2.52zm1.39-4.11.76-.45c.53-.3 1.42-.75 1.42.52v.12a2.43 2.43 0 0 1-.6 1.7l.75 1.43-.75.44-.62-1.39-.27.15v1.75l-.69.4zm.8 2a1.21 1.21 0 0 0 .67-1.22v-.37c0-.49-.16-.61-.67-.31l-.11.06V215zm1.97-.44v-1.66a2.35 2.35 0 0 1 1.19-2.23c.76-.43 1-.14 1 .4a3.36 3.36 0 0 1-.07.6l-.56.33v-.23c0-.51-.15-.68-.42-.53s-.43.44-.43 1v2.12c0 .58.13.68.43.51a1.2 1.2 0 0 0 .45-1.06v-.61l-.37.21V213l1-.61v2.37l-.47.27-.07-.4a1.64 1.64 0 0 1-.72.9c-.25.18-.96.47-.96-.97zm2.96-4.87.71-.41V214l-.71.4zm1.51-.87.58-.33 1.13 2.47a13.8 13.8 0 0 1-.07-1.38v-1.7l.63-.37v4.68l-.57.33-1.13-2.39c0 .32.07.68.07 1.63v1.37l-.63.36zm2.99 1.43v-1.66a2.33 2.33 0 0 1 1.19-2.22c.76-.44 1-.15 1 .39a3.26 3.26 0 0 1-.07.6l-.56.33v-.23c0-.51-.14-.68-.41-.52s-.44.43-.44 1v2.12c0 .58.13.68.43.51a1.2 1.2 0 0 0 .45-1.06v-.61l-.36.21v-.46l1.05-.61v2.37l-.47.27-.08-.4a1.64 1.64 0 0 1-.72.9c-.3.22-1.01.47-1.01-.93z"
          />
          <path className="prefix__cls-9" d="m575.33 84.48 36.56-21.24v63.32l-36.56 21.11V84.48z" />
          <path className="prefix__cls-16" d="m506.27 107.8 69.06 39.87V84.48l-69.06-39.87v63.19z" />
          <path className="prefix__cls-61" d="m529.52 111.86 20.31 11.72v9.37l-20.31-11.73v-9.36z" />
          <path className="prefix__cls-40" d="m530.52 120.69 19.31 11.15v-8.26l-19.31-11.15v8.26z" />
          <path className="prefix__cls-61" d="m539.11 117.39 1.13.64v9.38l-1.13-.65v-9.37z" />
          <path className="prefix__cls-17" d="m611.89 63.24-69.06-39.87-36.56 21.24 69.06 39.87 36.56-21.24z" />
          <path className="prefix__cls-6" d="m542.83 25.72-32.5 18.76 65 37.52 32.49-18.76-64.99-37.52z" />
          <path className="prefix__cls-7" d="M542.83 25.72v2.35l62.96 36.35 2.03-1.18-64.99-37.52z" />
          <path className="prefix__cls-9" d="m510.33 44.48 32.5-18.76v2.35l-30.46 17.59-2.04-1.18z" />
          <path className="prefix__cls-54" d="m542.83 25.72 1.76 3.35-30.32 17.68-3.94-2.27 32.5-18.76z" />
          <path
            className="prefix__cls-39"
            d="m560.22 58.12-4.62-2.67-5.05 2.92-2.09-1.2 12.12-7 2.09 1.2-4.75 2.74 4.62 2.67 4.75-2.78 2.08 1.2-12.12 7-2.08-1.2z"
          />
          <path
            className="prefix__cls-39"
            d="M559.08 65a21.26 21.26 0 0 1-10.41-2.49c-2.87-1.66-4.45-3.89-4.45-6.29s1.58-4.64 4.45-6.3c5.74-3.31 15.08-3.31 20.82 0 2.87 1.66 4.45 3.9 4.45 6.3s-1.58 4.63-4.45 6.29A21.26 21.26 0 0 1 559.08 65zm0-16.58a20.26 20.26 0 0 0-9.91 2.37c-2.55 1.47-3.95 3.4-3.95 5.43s1.4 3.95 3.95 5.43c5.47 3.15 14.35 3.15 19.82 0 2.55-1.48 4-3.4 4-5.43s-1.4-4-4-5.43a20.26 20.26 0 0 0-9.91-2.38z"
          />
          <path
            className="prefix__cls-61"
            d="M510.34 58.55v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.31 3.65v-4.69l4.07 2.34v4.7l-4.07-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.64v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65V72.1l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65V79.4l4.06 2.34v4.7l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.7l4.06 2.35v4.69l-4.06-2.34z"
          />
          <path
            className="prefix__cls-40"
            d="m549.25 79.93 3.06 1.77v-3.6l-3.06-1.77v3.6zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm25.28 14.59 3.06 1.77v-3.6l-3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-41"
            d="m567.21 86.69 1 .58v3.6l-1 .52v-4.7zm-6.32-3.64 1 .57v3.61l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51V79.4zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51V72.1zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.64 1 .57v3.6l-1 .52v-4.69zm-6.32-3.65 1 .57v3.61l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.31-3.65 1 .58v3.6l-1 .51v-4.69z"
          />
          <path
            className="prefix__cls-40"
            d="m561.89 87.23 3.06 1.76v-3.6l-3.06-1.77v3.61zm-6.32-3.65 3.06 1.77v-3.61l-3.06-1.76v3.6zm-37.92-21.89 3.07 1.77v-3.61l-3.07-1.76v3.6zm18.96 10.94 3.06 1.77v-3.6l-3.06-1.77v3.6zm-25.27-14.59 3.06 1.77v-3.6l-3.06-1.77v3.6zm18.95 10.89 3.06 1.76v-3.54l-3.06-1.77v3.55zm-6.32-3.59 3.06 1.77V63.5l-3.06-1.77v3.61z"
          />
          <path
            className="prefix__cls-61"
            d="M510.34 67.93v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.31 3.65v-4.69l4.07 2.35v4.69l-4.07-2.35zm6.32 3.65v-4.69l4.06 2.34v4.7l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.7l4.06 2.35v4.69l-4.06-2.34zm6.32 3.64v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34z"
          />
          <path
            className="prefix__cls-40"
            d="m549.25 89.31 3.06 1.77v-3.6l-3.06-1.77v3.6zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm25.28 14.59 3.06 1.77v-3.6l-3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-41"
            d="m567.21 96.08 1 .57v3.6l-1 .52v-4.69zm-6.32-3.65 1 .57v3.61l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .52v-4.7zm-6.32-3.64 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.31-3.65 1 .58v3.6l-1 .51v-4.69z"
          />
          <path
            className="prefix__cls-40"
            d="m561.89 96.61 3.06 1.77v-3.61L561.89 93v3.61zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm-37.92-21.89 3.07 1.77v-3.6l-3.07-1.77v3.6zm18.96 10.94 3.06 1.77v-3.6l-3.06-1.77v3.6zm-25.27-14.59 3.06 1.77v-3.6l-3.06-1.77v3.6zm18.95 10.89 3.06 1.77v-3.55l-3.06-1.76v3.54zm-6.32-3.59 3.06 1.77v-3.61l-3.06-1.76v3.6z"
          />
          <path
            className="prefix__cls-61"
            d="M510.34 77.31v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.31 3.65v-4.69l4.07 2.35v4.69l-4.07-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.7l4.06 2.35v4.69l-4.06-2.34zm6.32 3.64v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34z"
          />
          <path
            className="prefix__cls-40"
            d="m549.25 98.69 3.06 1.77v-3.6l-3.06-1.77v3.6zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm25.28 14.6 3.06 1.76v-3.6l-3.06-1.77v3.61z"
          />
          <path
            className="prefix__cls-41"
            d="m567.21 105.46 1 .57v3.61l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .52v-4.7zm-6.32-3.64 1 .57v3.6l-1 .52v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.31-3.65 1 .58v3.6l-1 .51v-4.69z"
          />
          <path
            className="prefix__cls-40"
            d="m561.89 105.99 3.06 1.77v-3.61l-3.06-1.76v3.6zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm-37.92-21.89 3.07 1.77v-3.6l-3.07-1.77v3.6zm18.96 10.94 3.06 1.77v-3.6l-3.06-1.77v3.6zM511.34 76.8l3.06 1.77v-3.6l-3.06-1.77v3.6zm18.95 10.89 3.06 1.77v-3.55l-3.06-1.76v3.54zm-6.32-3.59 3.06 1.77v-3.6l-3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-61"
            d="M510.34 86.7V82l4.06 2.35v4.69l-4.06-2.34zm6.31 3.64v-4.69l4.07 2.35v4.69l-4.07-2.35zm6.32 3.65V89.3l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.68l-4.06-2.34zm6.32 3.65V96.6l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.64v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34z"
          />
          <path
            className="prefix__cls-40"
            d="m549.25 108.07 3.06 1.77v-3.6l-3.06-1.77v3.6zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm25.28 14.6 3.06 1.76v-3.6l-3.06-1.76v3.6z"
          />
          <path
            className="prefix__cls-41"
            d="m567.21 114.84 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.64 1 .57v3.6l-1 .52v-4.69zm-6.32-3.65 1 .57v3.61l-1 .51V96.6zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51V89.3zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zM510.34 82l1 .58v3.6l-1 .52V82z"
          />
          <path
            className="prefix__cls-40"
            d="m561.89 115.37 3.06 1.77v-3.6l-3.06-1.77v3.6zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm-37.92-21.89 3.07 1.77V88l-3.07-1.77v3.6zm18.96 10.95 3.06 1.76v-3.6l-3.06-1.77v3.61zm-25.27-14.6 3.06 1.77v-3.6l-3.06-1.77v3.6zm18.95 10.89 3.06 1.77V95.3l-3.06-1.77v3.54zm-6.32-3.59 3.06 1.77v-3.6l-3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-61"
            d="M510.34 96.08v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.31 3.64v-4.69l4.07 2.35v4.69l-4.07-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.7l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34zm6.32 3.64v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.35v4.69l-4.06-2.35zm6.32 3.65v-4.69l4.06 2.34v4.69l-4.06-2.34z"
          />
          <path
            className="prefix__cls-40"
            d="m549.25 117.45 3.06 1.77v-3.6l-3.06-1.77v3.6zm-6.32-3.64 3.06 1.76v-3.6l-3.06-1.77v3.61zm25.28 14.59 3.06 1.77v-3.61l-3.06-1.76v3.6z"
          />
          <path
            className="prefix__cls-41"
            d="m567.21 124.22 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.64 1 .57v3.6l-1 .52v-4.69zm-6.32-3.65 1 .57v3.61l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.32-3.65 1 .58v3.6l-1 .51v-4.69zm-6.31-3.64 1 .57v3.6l-1 .52v-4.69z"
          />
          <path
            className="prefix__cls-40"
            d="m561.89 124.75 3.06 1.77v-3.6l-3.06-1.77v3.6zm-6.32-3.65 3.06 1.77v-3.6l-3.06-1.77v3.6zm-37.92-21.89 3.07 1.77v-3.6l-3.07-1.77v3.6zm18.96 10.95 3.06 1.76v-3.6l-3.06-1.76v3.6zm-25.27-14.6 3.06 1.77v-3.6l-3.06-1.77v3.6zm18.95 10.89 3.06 1.77v-3.54l-3.06-1.77v3.54zm-6.32-3.59 3.06 1.77v-3.6l-3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-62"
            d="M608.73 76.79V72.1l-4.07 2.35v4.69l4.07-2.35zm-6.32 3.65v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65V79.4l-4.06 2.34v4.7l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34zm-6.32 3.65v-4.7l-4.06 2.35v4.69l4.06-2.34z"
          />
          <path
            className="prefix__cls-63"
            d="m601.41 79.93-3.06 1.77v-3.6l3.06-1.77v3.6zm6.32-3.65-3.07 1.77v-3.6l3.07-1.77v3.6zm-25.28 14.59-3.06 1.77v-3.6l3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-64"
            d="m583.45 86.69-1 .58v3.6l1 .52v-4.7zm6.32-3.64-1 .57v3.61l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51V79.4zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51V72.1z"
          />
          <path
            className="prefix__cls-63"
            d="m588.77 87.23-3.06 1.76v-3.6l3.06-1.77v3.61zm6.32-3.65-3.06 1.77v-3.61l3.06-1.76v3.6z"
          />
          <path
            className="prefix__cls-62"
            d="M608.73 86.17v-4.69l-4.07 2.35v4.69l4.07-2.35zm-6.32 3.65v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34z"
          />
          <path
            className="prefix__cls-63"
            d="m601.41 89.31-3.06 1.77v-3.6l3.06-1.77v3.6zm6.32-3.65-3.07 1.77v-3.6l3.07-1.77v3.6zm-25.28 14.59-3.06 1.77v-3.6l3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-64"
            d="m583.45 96.08-1 .57v3.6l1 .52v-4.69zm6.32-3.65-1 .57v3.61l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69z"
          />
          <path
            className="prefix__cls-63"
            d="m588.77 96.61-3.06 1.77v-3.61l3.06-1.77v3.61zm6.32-3.65-3.06 1.77v-3.6l3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-62"
            d="M608.73 95.56v-4.7l-4.07 2.35v4.69l4.07-2.34zm-6.32 3.64v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34z"
          />
          <path
            className="prefix__cls-63"
            d="m601.41 98.69-3.06 1.77v-3.6l3.06-1.77v3.6zm6.32-3.65-3.07 1.77v-3.6l3.07-1.77v3.6zm-25.28 14.6-3.06 1.76v-3.6l3.06-1.77v3.61z"
          />
          <path
            className="prefix__cls-64"
            d="m583.45 105.46-1 .57v3.61l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .52v-4.7z"
          />
          <path
            className="prefix__cls-63"
            d="m588.77 105.99-3.06 1.77v-3.61l3.06-1.76v3.6zm6.32-3.65-3.06 1.77v-3.6l3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-62"
            d="M608.73 104.94v-4.69l-4.07 2.34v4.69l4.07-2.34zm-6.32 3.64v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34z"
          />
          <path
            className="prefix__cls-63"
            d="m601.41 108.07-3.06 1.77v-3.6l3.06-1.77v3.6zm6.32-3.65-3.07 1.77v-3.6l3.07-1.77v3.6zm-25.28 14.6-3.06 1.76v-3.6l3.06-1.76v3.6z"
          />
          <path
            className="prefix__cls-64"
            d="m583.45 114.84-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.64-1 .57v3.6l1 .52v-4.69z"
          />
          <path
            className="prefix__cls-63"
            d="m588.77 115.37-3.06 1.77v-3.6l3.06-1.77v3.6zm6.32-3.65-3.06 1.77v-3.6l3.06-1.77v3.6z"
          />
          <path
            className="prefix__cls-62"
            d="M608.73 114.32v-4.69l-4.07 2.34v4.69l4.07-2.34zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34zm-6.32 3.64v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.35v4.69l4.06-2.35zm-6.32 3.65v-4.69l-4.06 2.34v4.69l4.06-2.34z"
          />
          <path
            className="prefix__cls-63"
            d="m601.41 117.45-3.06 1.77v-3.6l3.06-1.77v3.6zm6.32-3.64-3.07 1.76v-3.6l3.07-1.77v3.61zm-25.28 14.59-3.06 1.77v-3.61l3.06-1.76v3.6z"
          />
          <path
            className="prefix__cls-64"
            d="m583.45 124.22-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.65-1 .58v3.6l1 .51v-4.69zm6.32-3.64-1 .57v3.6l1 .52v-4.69zm6.32-3.65-1 .57v3.61l1 .51v-4.69z"
          />
          <path
            className="prefix__cls-63"
            d="m588.77 124.75-3.06 1.77v-3.6l3.06-1.77v3.6zm6.32-3.65-3.06 1.77v-3.6l3.06-1.77v3.6z"
          />
          <path className="prefix__cls-16" d="M530.64 37.45v-9.04l12.19 7.04v9.03l-12.19-7.03z" />
          <path className="prefix__cls-9" d="m555.02 37.45-12.19 7.03v-9.03l12.19-7.04v9.04z" />
          <path className="prefix__cls-17" d="m555.02 28.41-12.19-7.03-12.19 7.03 12.19 7.04 12.19-7.04z" />
          <path className="prefix__cls-54" d="m542.83 44.48 12.19-7.03 8.13 4.7-12.18 7.04-8.14-4.71z" />
          <path className="prefix__cls-62" d="m530.52 120.69-1 .53 20.31 11.73v-1.11l-19.31-11.15z" />
          <path className="prefix__cls-13" d="m453.47 180.5 48.74-28.15v-28.14l-48.74 28.14v28.15z" />
          <path className="prefix__cls-12" d="m453.47 180.5-28.44-16.42v-28.14l28.44 16.41v28.15z" />
          <path className="prefix__cls-34" d="M459.9 176.78v-15.8l38.25-22.09v15.8l-38.25 22.09z" />
          <path
            className="prefix__cls-52"
            d="M461.32 175.96v-11.85l6.85-3.95v11.85l-6.85 3.95zm28.64-16.53.01-11.86 6.84-3.95v11.85l-6.85 3.96zm-20.78 12v-11.86l9.25-5.34v11.85l-9.25 5.35zm10.52-6.08V153.5l9.25-5.34v11.85l-9.25 5.34z"
          />
          <path className="prefix__cls-50" d="m459.9 158.02 38.25-22.08v-4.69l-38.25 22.08v4.69z" />
          <path className="prefix__cls-11" d="m502.21 124.21-28.43-16.41-48.75 28.14 28.44 16.41 48.74-28.14z" />
          <path className="prefix__cls-48" d="m453.47 150.01-24.37-14.07 44.71-25.8 24.34 14.07-44.68 25.8z" />
          <path className="prefix__cls-13" d="m429.1 135.94 44.71-25.8-.03 2.34-42.65 24.63-2.03-1.17z" />
          <path className="prefix__cls-49" d="m473.78 112.48.03-2.34 24.34 14.07-2.04 1.17-22.33-12.9z" />
          <path className="prefix__cls-39" d="M461.59 147.66v-9.38l32.5-18.76v9.38l-32.5 18.76z" />
          <path
            className="prefix__cls-11"
            d="m463.15 143.24.55-.32v.22c0 .5.11.71.46.51a.76.76 0 0 0 .41-.67.62.62 0 0 0-.33-.6l-.73-.45a.9.9 0 0 1-.41-.81 2 2 0 0 1 1.07-1.66c.82-.48 1.07-.11 1.07.36a3.3 3.3 0 0 1-.08.6l-.55.32v-.22c0-.49-.13-.69-.45-.51a.74.74 0 0 0-.39.64.46.46 0 0 0 .22.45l.82.52a1 1 0 0 1 .46.85 2.06 2.06 0 0 1-1.11 1.71c-.84.49-1.08.14-1.08-.35a3.06 3.06 0 0 1 .07-.59zm2.7-4.71.71-.41v3.4c0 .57.11.68.39.52s.41-.41.41-1v-3.4l.7-.41v3.21a2.17 2.17 0 0 1-1.11 2.11c-.4.23-1.1.54-1.1-.83zm2.99-1.73.71-.41c.53-.3 1.43-.75 1.43.61v.17a2.54 2.54 0 0 1-1.37 2.41h-.06V141l-.71.41zm.74 2.28a1.34 1.34 0 0 0 .68-1.37v-.41c0-.56-.15-.72-.68-.41v2.19zm1.93-3.82 1.73-1v.56l-1 .59v1.38l.78-.45v.55l-.78.46v1.59l1-.61v.56l-1.75 1zm2.26-1.26.77-.45c.52-.3 1.41-.75 1.41.51v.12a2.37 2.37 0 0 1-.61 1.69l.75 1.42-.75.44-.61-1.38-.27.15v1.73l-.69.4zm.8 1.93a1.19 1.19 0 0 0 .67-1.21v-.37c0-.48-.16-.6-.67-.3l-.11.06V136zm2.05-3.62.92-.53.45 1.53c.09.35.14.69.19 1 .05-.34.1-.74.19-1.19l.46-2.06.9-.52v4.64l-.66.38V134c0-1 .05-1.79.08-2.14h-.05l-.71 3.44-.44.25-.71-2.62h-.05c0 .31.07 1.11.07 2.05v1.54l-.66.38zm4.44-2.56.81-.47.86 4.14-.71.41-.13-.75-.85.49-.12.9-.72.41zm.75 2.84-.33-2.12-.33 2.5zm1.37-4.07.76-.44c.53-.3 1.41-.75 1.41.51v.12a2.4 2.4 0 0 1-.6 1.69l.75 1.42-.75.43-.62-1.37-.26.15v1.73l-.69.4zm.79 1.94a1.18 1.18 0 0 0 .67-1.21v-.37c0-.48-.15-.6-.67-.3l-.1.06v1.88zm2.03-3.58.7-.41v2l.81-2.49.7-.4-.89 2.69 1 1.89-.75.43-.86-1.71v2.21l-.7.41zm2.76-1.58 1.73-1v.56l-1 .59v1.38l.78-.45v.55l-.78.46V129l1-.61v.56l-1.75 1zm2.69-1-.75.43v-.55l2.2-1.27v.55l-.74.43V128l-.71.41z"
          />
          <path className="prefix__cls-28" d="m461.59 147.66-2.03-1.17v-9.38l2.03 1.17v9.38z" />
          <path className="prefix__cls-38" d="m494.09 119.52-32.5 18.76-2.03-1.17 32.39-18.83 2.14 1.24z" />
          <path className="prefix__cls-54" d="m473.81 110.14 2.39 3.72-42.54 24.71-4.56-2.64 44.71-25.79z" />
          <path className="prefix__cls-11" d="m453.47 179.32 48.74-28.15 4.06 2.35-48.75 28.14-4.05-2.34z" />
          <path className="prefix__cls-12" d="M453.47 179.32v1.18l4.06 2.34-.01-1.18-4.05-2.34z" />
          <path className="prefix__cls-13" d="m457.52 181.66 48.75-28.14v1.18l-48.74 28.14-.01-1.18z" />
          <path className="prefix__cls-9" d="M211.77 228.58v98.5l-8.12 4.69v-98.5l8.12-4.69z" />
          <path className="prefix__cls-34" d="m203.66 331.77-6.1 3.55v-12.34l6.1-3.63v12.42z" />
          <path className="prefix__cls-16" d="M158.97 228.58v98.5l8.12 4.69v-98.5l-8.12-4.69z" />
          <path className="prefix__cls-28" d="m150.84 324.74 6.1 3.52v-98.5l-6.1-3.52v98.5z" />
          <path className="prefix__cls-39" d="m156.94 328.26 2.03-1.18v-98.5l-2.03 1.18v98.5z" />
          <path className="prefix__cls-28" d="m165.06 332.94 6.1 3.52v-98.5l-6.1-3.52v98.5z" />
          <path className="prefix__cls-39" d="m171.16 336.46 2.03-1.17v-98.5l-2.03 1.17v98.5z" />
          <path
            className="prefix__cls-38"
            d="m150.84 226.24 6.1-3.52 2.03 1.17-4.06 2.35 4.06 2.34-2.03 1.18-6.1-3.52z"
          />
          <path className="prefix__cls-16" d="M173.19 236.79v98.5l8.12 4.72v-98.53l-8.12-4.69z" />
          <path
            className="prefix__cls-38"
            d="m173.19 236.79-2.03 1.17-6.1-3.52 2.03-1.17 6.1 3.52zm32.5-18.76-2.03 1.17-6.1-3.52 2.03-1.17 6.1 3.52z"
          />
          <path className="prefix__cls-28" d="m179.28 341.15 6.09 3.52v-98.5l-6.09-3.54v98.52z" />
          <path className="prefix__cls-39" d="m219.9 324.74-6.09 3.52v-98.5l6.09-3.52v98.5z" />
          <path className="prefix__cls-65" d="m213.81 328.26-2.03-1.18v-98.5l2.03 1.18v98.5z" />
          <path className="prefix__cls-39" d="m205.69 320.63-6.1 3.52v-86.19l6.1-3.52v86.19z" />
          <path className="prefix__cls-65" d="m199.59 324.15-2.03-1.17v-86.19l2.03 1.17v86.19z" />
          <path
            className="prefix__cls-38"
            d="m219.9 226.24-6.09-3.52-2.03 1.17 4.06 2.35-4.06 2.34 2.03 1.18 6.09-3.52z"
          />
          <path className="prefix__cls-9" d="M197.56 236.82v98.5l-8.13 4.69v-98.53l8.13-4.66z" />
          <path
            className="prefix__cls-38"
            d="m191.47 242.65-2.03-1.17-4.07 2.34-4.06-2.34-2.03 1.15 6.09 3.54 6.1-3.52z"
          />
          <path className="prefix__cls-39" d="m161 234.44 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 236.79v3.58L162 238.6v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m161 239.13 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m161 243.82 4.06 2.35v4.69l-4.06-2.34v-4.7z" />
          <path className="prefix__cls-66" d="M165.06 246.17v3.58l-3.06-1.76v-3.59l3.06 1.77z" />
          <path className="prefix__cls-53" d="m161 248.52 1-.53v-3.59l-1-.58v4.7z" />
          <path className="prefix__cls-39" d="m161 253.21 4.06 2.34v4.69L161 257.9v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 255.55v3.58l-3.06-1.76v-3.59l3.06 1.77z" />
          <path className="prefix__cls-53" d="m161 257.9 1-.53v-3.59l-1-.57v4.69z" />
          <path className="prefix__cls-39" d="m161 262.59 4.06 2.34v4.69l-4.06-2.34v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 264.93v3.59l-3.06-1.77v-3.58l3.06 1.76z" />
          <path className="prefix__cls-53" d="m161 267.28 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m161 271.97 4.06 2.34V279l-4.06-2.34v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 274.31v3.59l-3.06-1.77v-3.58l3.06 1.76z" />
          <path className="prefix__cls-53" d="m161 276.66 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m161 281.35 4.06 2.34v4.7l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 283.69v3.59l-3.06-1.77v-3.58l3.06 1.76z" />
          <path className="prefix__cls-53" d="m161 286.04 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m161 290.73 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 293.08v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m161 295.42 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m161 300.11 4.06 2.35v4.69L161 304.8v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 302.46v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m161 304.8 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m161 309.49 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 311.84v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m161 314.18 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m161 318.87 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M165.06 321.22v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m161 323.56 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 242.68 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 245.03v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m175.22 247.37 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 252.06 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 254.41v3.58l-3.06-1.76v-3.59l3.06 1.77z" />
          <path className="prefix__cls-53" d="m175.22 256.75 1-.52v-3.59l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 261.44 4.06 2.35v4.69l-4.06-2.34v-4.7z" />
          <path className="prefix__cls-66" d="M179.28 263.79v3.58l-3.06-1.76v-3.59l3.06 1.77z" />
          <path className="prefix__cls-53" d="m175.22 266.14 1-.53v-3.59l-1-.58v4.7z" />
          <path className="prefix__cls-39" d="m175.22 270.83 4.06 2.34v4.69l-4.06-2.34v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 273.17v3.58l-3.06-1.76v-3.59l3.06 1.77z" />
          <path className="prefix__cls-53" d="m175.22 275.52 1-.53v-3.59l-1-.57v4.69z" />
          <path className="prefix__cls-39" d="m175.22 280.21 4.06 2.34v4.69l-4.06-2.34v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 282.55v3.59l-3.06-1.77v-3.58l3.06 1.76z" />
          <path className="prefix__cls-53" d="m175.22 284.9 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 289.59 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 291.94v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m175.22 294.28 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 298.97 4.06 2.34v4.7l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 301.31v3.59l-3.06-1.77v-3.58l3.06 1.76z" />
          <path className="prefix__cls-53" d="m175.22 303.66 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 308.35 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 310.7v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m175.22 313.04 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 317.73 4.06 2.35v4.69l-4.06-2.35v-4.69z" />
          <path className="prefix__cls-66" d="M179.28 320.08v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path className="prefix__cls-53" d="m175.22 322.42 1-.53v-3.58l-1-.58v4.69z" />
          <path className="prefix__cls-39" d="m175.22 327.11 4.06 2.35v4.69l-4.06-2.34v-4.7z" />
          <path className="prefix__cls-66" d="M179.28 329.46v3.58l-3.06-1.77v-3.58l3.06 1.77z" />
          <path
            className="prefix__cls-53"
            d="m175.22 331.81 1-.54v-3.58l-1-.58v4.7zm34.53-97.37-4.06 2.35v4.69l4.06-2.35v-4.69z"
          />
          <path className="prefix__cls-67" d="M205.69 236.79v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m209.75 239.13-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m209.75 243.82-4.06 2.35v4.69l4.06-2.34v-4.7z" />
          <path className="prefix__cls-67" d="M205.69 246.17v3.58l3.06-1.76v-3.59l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m209.75 248.52-1-.53v-3.59l1-.58v4.7z" />
          <path className="prefix__cls-53" d="m209.75 253.21-4.06 2.34v4.69l4.06-2.34v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 255.55v3.58l3.06-1.76v-3.59l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m209.75 257.9-1-.53v-3.59l1-.57v4.69z" />
          <path className="prefix__cls-53" d="m209.75 262.59-4.06 2.34v4.69l4.06-2.34v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 264.93v3.59l3.06-1.77v-3.58l-3.06 1.76z" />
          <path className="prefix__cls-68" d="m209.75 267.28-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m209.75 271.97-4.06 2.34V279l4.06-2.34v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 274.31v3.59l3.06-1.77v-3.58l-3.06 1.76z" />
          <path className="prefix__cls-68" d="m209.75 276.66-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m209.75 281.35-4.06 2.34v4.7l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 283.69v3.59l3.06-1.77v-3.58l-3.06 1.76z" />
          <path className="prefix__cls-68" d="m209.75 286.04-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m209.75 290.73-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 293.08v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m209.75 295.42-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m209.75 300.11-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 302.46v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m209.75 304.8-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m209.75 309.49-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 311.84v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m209.75 314.18-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m209.75 318.87-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M205.69 321.22v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m209.75 323.56-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 242.68-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 245.03v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 247.37-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 252.06-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 254.41v3.58l3.06-1.76v-3.59l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 256.75-1-.52v-3.59l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 261.44-4.06 2.35v4.69l4.06-2.34v-4.7z" />
          <path className="prefix__cls-67" d="M191.47 263.79v3.58l3.06-1.76v-3.59l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 266.14-1-.53v-3.59l1-.58v4.7z" />
          <path className="prefix__cls-53" d="m195.53 270.83-4.06 2.34v4.69l4.06-2.34v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 273.17v3.58l3.06-1.76v-3.59l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 275.52-1-.53v-3.59l1-.57v4.69z" />
          <path className="prefix__cls-53" d="m195.53 280.21-4.06 2.34v4.69l4.06-2.34v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 282.55v3.59l3.06-1.77v-3.58l-3.06 1.76z" />
          <path className="prefix__cls-68" d="m195.53 284.9-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 289.59-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 291.94v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 294.28-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 298.97-4.06 2.34v4.7l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 301.31v3.59l3.06-1.77v-3.58l-3.06 1.76z" />
          <path className="prefix__cls-68" d="m195.53 303.66-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 308.35-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 310.7v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 313.04-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 317.73-4.06 2.35v4.69l4.06-2.35v-4.69z" />
          <path className="prefix__cls-67" d="M191.47 320.08v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 322.42-1-.53v-3.58l1-.58v4.69z" />
          <path className="prefix__cls-53" d="m195.53 327.11-4.06 2.35v4.69l4.06-2.34v-4.7z" />
          <path className="prefix__cls-67" d="M191.47 329.46v3.58l3.06-1.77v-3.58l-3.06 1.77z" />
          <path className="prefix__cls-68" d="m195.53 331.81-1-.54v-3.58l1-.58v4.7z" />
          <path
            className="prefix__cls-38"
            d="m197.56 236.79 2.03 1.17 6.1-3.52-2.03-1.17-6.1 3.52zm-32.5-18.76 2.03 1.17 6.1-3.52-2.03-1.17-6.1 3.52z"
          />
          <path className="prefix__cls-39" d="m191.47 341.15-6.1 3.52v-98.5l6.1-3.52v98.5z" />
          <path
            className="prefix__cls-38"
            d="m179.28 209.82 2.03 1.18 4.07-2.35 4.06 2.35 2.03-1.18-6.1-3.51-6.09 3.51z"
          />
          <path className="prefix__cls-17" d="m215.84 226.24-30.47-17.59-30.46 17.59 30.47 17.58 30.46-17.58z" />
          <path
            className="prefix__cls-28"
            d="M165.06 218.03v2.35l2.03-1.18-2.03-1.17zm14.22-8.21v2.35l2.03-1.17-2.03-1.18z"
          />
          <path
            className="prefix__cls-39"
            d="M191.47 209.82v2.35l-2.03-1.17 2.03-1.18zm14.22 8.21v2.35l-2.03-1.18 2.03-1.17z"
          />
          <path className="prefix__cls-57" d="m185.37 211 26.4 15.24-26.39 15.24-26.41-15.24 26.4-15.24z" />
          <path className="prefix__cls-7" d="m185.37 213.34 24.38 14.07 2.02-1.17-26.4-15.24v2.34z" />
          <path className="prefix__cls-9" d="m158.96 226.24 26.4-15.24.01 2.34-24.38 14.07-2.03-1.17z" />
          <path className="prefix__cls-54" d="m185.36 211 2.39 3.72-24.22 14.15-4.57-2.63 26.4-15.24z" />
          <path
            className="prefix__cls-39"
            d="M342.87 278.31v-14.89h-2.56v14.89a.65.65 0 0 0 .38.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M335.52 265.33a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M347.66 265.2a6.07 6.07 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.92z" />
          <path
            className="prefix__cls-39"
            d="M322.9 266.72v-14.89h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.82 0 .62.62 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M315.55 253.75a6.07 6.07 0 1 1 6.07 6.07 6.08 6.08 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M327.68 253.62a6.07 6.07 0 0 0-6.06-6h-.43a4.67 4.67 0 1 0 6.49 5.92z" />
          <path className="prefix__cls-12" d="m230.1 281.35 44.69 25.79v-84.42l-44.69-25.8v84.43z" />
          <path className="prefix__cls-41" d="M230.1 281.35v-1.59l44.69 25.8v1.58l-44.69-25.79z" />
          <path
            className="prefix__cls-52"
            d="m234.16 274.31 4.07 2.35v7.79l-4.07-2.34v-7.8zm4.44 2.56 4.06 2.34v7.8l-4.07-2.34.01-7.8zm4.43 2.56 4.06 2.34v7.8l-4.06-2.34v-7.8zm4.43 2.55 4.06 2.35v7.8l-4.06-2.35v-7.8zm5.91 3.42 4.06 2.35v7.79l-4.06-2.34v-7.8zm4.43 2.56 4.06 2.34v7.8l-4.06-2.34v-7.8zm4.43 2.56 4.06 2.34v7.8l-4.06-2.35v-7.79zm4.43 2.55 4.06 2.35v7.8l-4.06-2.35v-7.8z"
          />
          <path className="prefix__cls-54" d="M230.01 274.12v3l44.78 25.33v-4.69l-2.03 1.17-42.75-24.81z" />
          <path className="prefix__cls-39" d="m274.79 297.76-2 1.17v-2.33l2-1.18zm40.62-23.45-2 1.17v-2.33l2-1.18z" />
          <path className="prefix__cls-28" d="m272.76 298.93-44.56-25.87v-2.19l44.56 25.73v2.33z" />
          <path className="prefix__cls-38" d="m274.79 295.42-2.03 1.18-44.56-25.73 1.9-1.26 44.69 25.81z" />
          <path
            className="prefix__cls-52"
            d="M234.16 267.27v-7.03l4.07 2.34v7.04l-4.07-2.35zm4.07 2.35v-7.04l4.06 2.35v7.03l-4.06-2.34z"
          />
          <path className="prefix__cls-38" d="m234.16 267.27-.79.47 8.12 4.69.8-.47-8.13-4.69z" />
          <path className="prefix__cls-39" d="m241.49 273.46.8-.46v-1.04l-.8.47v1.03" />
          <path className="prefix__cls-28" d="m241.49 273.46-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m238.02 262.47.41.23v7.04l-.41-.23v-7.04z" />
          <path className="prefix__cls-52" d="M248.4 275.48v-7.03l4.06 2.34v7.04l-4.06-2.35z" />
          <path className="prefix__cls-52" d="M252.46 277.83v-7.04l4.06 2.35v7.03l-4.06-2.34z" />
          <path className="prefix__cls-38" d="m248.4 275.48-.8.47 8.12 4.69.8-.47-8.12-4.69z" />
          <path className="prefix__cls-39" d="m255.72 281.67.8-.46v-1.04l-.8.47v1.03" />
          <path className="prefix__cls-28" d="m255.72 281.67-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m252.26 270.68.4.23v7.04l-.4-.23v-7.04z" />
          <path
            className="prefix__cls-52"
            d="M262.63 283.69v-7.03l4.06 2.34v7.04l-4.06-2.35zm4.06 2.35V279l4.06 2.35v7.03l-4.06-2.34z"
          />
          <path className="prefix__cls-38" d="m262.63 283.69-.8.46 8.13 4.7.79-.47-8.12-4.69z" />
          <path className="prefix__cls-39" d="m269.96 289.88.79-.47v-1.03l-.79.47v1.03" />
          <path className="prefix__cls-28" d="m269.96 289.88-8.13-4.69v-1.04l8.13 4.7v1.03z" />
          <path className="prefix__cls-41" d="m266.49 278.89.4.23v7.04l-.4-.23v-7.04z" />
          <path
            className="prefix__cls-52"
            d="M234.16 253.2v-7.03l4.07 2.34v7.04l-4.07-2.35zm4.07 2.35v-7.04l4.06 2.35v7.03l-4.06-2.34z"
          />
          <path className="prefix__cls-38" d="m234.16 253.2-.79.47 8.12 4.69.8-.47-8.13-4.69z" />
          <path className="prefix__cls-39" d="m241.49 259.39.8-.46v-1.04l-.8.47v1.03" />
          <path className="prefix__cls-28" d="m241.49 259.39-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m238.02 248.4.41.23v7.04l-.41-.23v-7.04z" />
          <path className="prefix__cls-52" d="M248.4 261.41v-7.03l4.06 2.34v7.04l-4.06-2.35z" />
          <path className="prefix__cls-52" d="M252.46 263.76v-7.04l4.06 2.35v7.03l-4.06-2.34z" />
          <path className="prefix__cls-38" d="m248.4 261.41-.8.47 8.12 4.69.8-.47-8.12-4.69z" />
          <path className="prefix__cls-39" d="m255.72 267.6.8-.47v-1.03l-.8.47v1.03" />
          <path className="prefix__cls-28" d="m255.72 267.6-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m252.26 256.61.4.23v7.04l-.4-.23v-7.04z" />
          <path
            className="prefix__cls-52"
            d="M262.63 269.62v-7.04l4.06 2.35v7.04l-4.06-2.35zm4.06 2.35v-7.04l4.06 2.34v7.04l-4.06-2.34z"
          />
          <path className="prefix__cls-38" d="m262.63 269.62-.8.46 8.13 4.69.79-.46-8.12-4.69z" />
          <path className="prefix__cls-39" d="m269.96 275.81.79-.47v-1.03l-.79.46v1.04" />
          <path className="prefix__cls-28" d="m269.96 275.81-8.13-4.69v-1.04l8.13 4.69v1.04z" />
          <path className="prefix__cls-41" d="m266.49 264.82.4.23v7.04l-.4-.24v-7.03z" />
          <path
            className="prefix__cls-52"
            d="M234.16 239.13v-7.03l4.07 2.34v7.04l-4.07-2.35zm4.07 2.35v-7.04l4.06 2.35v7.03l-4.06-2.34z"
          />
          <path className="prefix__cls-38" d="m234.16 239.13-.79.47 8.12 4.69.8-.47-8.13-4.69z" />
          <path className="prefix__cls-39" d="m241.49 245.32.8-.47v-1.03l-.8.47v1.03" />
          <path className="prefix__cls-28" d="m241.49 245.32-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m238.02 234.33.41.23v7.04l-.41-.23v-7.04z" />
          <path className="prefix__cls-52" d="M248.4 247.34v-7.03l4.06 2.34v7.04l-4.06-2.35z" />
          <path className="prefix__cls-52" d="M252.46 249.69v-7.04l4.06 2.35v7.03l-4.06-2.34z" />
          <path className="prefix__cls-38" d="m248.4 247.34-.8.47 8.12 4.69.8-.47-8.12-4.69z" />
          <path className="prefix__cls-39" d="m255.72 253.53.8-.47v-1.03l-.8.47v1.03" />
          <path className="prefix__cls-28" d="m255.72 253.53-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m252.26 242.54.4.23v7.04l-.4-.24v-7.03z" />
          <path
            className="prefix__cls-52"
            d="M262.63 255.55v-7.04l4.06 2.35v7.03l-4.06-2.34zm4.06 2.34v-7.03l4.06 2.34v7.04l-4.06-2.35z"
          />
          <path className="prefix__cls-38" d="m262.63 255.55-.8.46 8.13 4.69.79-.46-8.12-4.69z" />
          <path className="prefix__cls-39" d="m269.96 261.74.79-.47v-1.03l-.79.46v1.04" />
          <path className="prefix__cls-28" d="m269.96 261.74-8.13-4.69v-1.04l8.13 4.69v1.04z" />
          <path className="prefix__cls-41" d="m266.49 250.75.4.23v7.03l-.4-.23v-7.03z" />
          <path
            className="prefix__cls-52"
            d="M234.16 225.06v-7.03l4.07 2.34v7.04l-4.07-2.35zm4.07 2.35v-7.04l4.06 2.35v7.03l-4.06-2.34z"
          />
          <path className="prefix__cls-38" d="m234.16 225.06-.79.47 8.12 4.69.8-.47-8.13-4.69z" />
          <path className="prefix__cls-39" d="m241.49 231.25.8-.47v-1.03l-.8.47v1.03" />
          <path className="prefix__cls-28" d="m241.49 231.25-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m238.02 220.26.41.23v7.04l-.41-.24v-7.03z" />
          <path className="prefix__cls-52" d="M248.4 233.27v-7.04l4.06 2.35v7.04l-4.06-2.35z" />
          <path className="prefix__cls-52" d="M252.46 235.62v-7.04l4.06 2.34v7.04l-4.06-2.34z" />
          <path className="prefix__cls-38" d="m248.4 233.27-.8.46 8.12 4.69.8-.46-8.12-4.69z" />
          <path className="prefix__cls-39" d="m255.72 239.46.8-.47v-1.03l-.8.46v1.04" />
          <path className="prefix__cls-28" d="m255.72 239.46-8.12-4.7v-1.03l8.12 4.69v1.04z" />
          <path className="prefix__cls-41" d="m252.26 228.47.4.23v7.04l-.4-.24v-7.03z" />
          <path
            className="prefix__cls-52"
            d="M262.63 241.48v-7.04l4.06 2.35v7.03l-4.06-2.34zm4.06 2.34v-7.03l4.06 2.34v7.04l-4.06-2.35z"
          />
          <path className="prefix__cls-38" d="m262.63 241.48-.8.46 8.13 4.69.79-.46-8.12-4.69z" />
          <path className="prefix__cls-39" d="m269.96 247.66.79-.46v-1.03l-.79.46v1.03" />
          <path className="prefix__cls-28" d="m269.96 247.66-8.13-4.69v-1.03l8.13 4.69v1.03z" />
          <path className="prefix__cls-41" d="m266.49 236.68.4.23v7.03l-.4-.23v-7.03z" />
          <path
            className="prefix__cls-52"
            d="M234.16 210.99v-7.04l4.07 2.35v7.04l-4.07-2.35zm4.07 2.35v-7.04l4.06 2.35v7.03l-4.06-2.34z"
          />
          <path className="prefix__cls-38" d="m234.16 210.99-.79.46 8.12 4.69.8-.46-8.13-4.69z" />
          <path className="prefix__cls-39" d="m241.49 217.18.8-.47v-1.03l-.8.46v1.04" />
          <path className="prefix__cls-28" d="m241.49 217.18-8.12-4.69v-1.04l8.12 4.69v1.04z" />
          <path className="prefix__cls-41" d="m238.02 206.19.41.23v7.04l-.41-.24v-7.03z" />
          <path className="prefix__cls-52" d="M248.4 219.2v-7.04l4.06 2.35v7.03l-4.06-2.34z" />
          <path className="prefix__cls-52" d="M252.46 221.54v-7.03l4.06 2.34v7.04l-4.06-2.35z" />
          <path className="prefix__cls-38" d="m248.4 219.2-.8.46 8.12 4.69.8-.46-8.12-4.69z" />
          <path className="prefix__cls-39" d="m255.72 225.38.8-.46v-1.03l-.8.46v1.03" />
          <path className="prefix__cls-28" d="m255.72 225.38-8.12-4.69v-1.03l8.12 4.69v1.03z" />
          <path className="prefix__cls-41" d="m252.26 214.4.4.23v7.03l-.4-.23v-7.03z" />
          <path
            className="prefix__cls-52"
            d="M262.63 227.41v-7.04l4.06 2.35v7.03l-4.06-2.34zm4.06 2.34v-7.03l4.06 2.34v7.04l-4.06-2.35z"
          />
          <path className="prefix__cls-38" d="m262.63 227.41-.8.46 8.13 4.69.79-.46-8.12-4.69z" />
          <path className="prefix__cls-39" d="m269.96 233.59.79-.46v-1.03l-.79.46v1.03" />
          <path className="prefix__cls-28" d="m269.96 233.59-8.13-4.69v-1.03l8.13 4.69v1.03z" />
          <path className="prefix__cls-41" d="m266.49 222.6.4.24v7.03l-.4-.23v-7.04z" />
          <path className="prefix__cls-13" d="m274.79 307.14 12.18-7.03v-84.43l-12.18 7.04v84.42z" />
          <path className="prefix__cls-39" d="m286.97 295.42 10.16-5.86v-84.43l-14.22 8.21 4.06 2.34v79.74z" />
          <path className="prefix__cls-34" d="M297.13 289.56v-7.04l-10.16 5.86v7.04l10.16-5.86z" />
          <path className="prefix__cls-51" d="M292.79 285.02v7.04l-.74.43v-7.03l.74-.44z" />
          <path fill="#b7957e" d="m297.13 205.13 4.06 2.34v84.43l-4.06-2.34v-84.43z" />
          <path className="prefix__cls-54" d="m301.19 282.52-4.06 4.5-10.16 5.87v-2.16l14.22-8.21z" />
          <path className="prefix__cls-50" d="M282.51 286.27v-7.04l-4.06 2.35v7.03l4.06-2.34z" />
          <path className="prefix__cls-38" d="m282.51 286.27.8.46-4.06 2.35-.8-.47 4.06-2.34z" />
          <path className="prefix__cls-28" d="m279.25 290.11-.8-.47v-1.03l.8.47v1.03" />
          <path className="prefix__cls-39" d="m279.25 290.11 4.06-2.35v-1.03l-4.06 2.35v1.03z" />
          <path className="prefix__cls-50" d="M282.51 272.19v-7.03l-4.06 2.34v7.04l4.06-2.35z" />
          <path className="prefix__cls-38" d="m282.51 272.19.8.47-4.06 2.34-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-28" d="m279.25 276.04-.8-.47v-1.03l.8.46v1.04" />
          <path className="prefix__cls-39" d="m279.25 276.04 4.06-2.35v-1.03l-4.06 2.34v1.04z" />
          <path className="prefix__cls-50" d="M282.51 258.13v-7.04l-4.06 2.35v7.03l4.06-2.34z" />
          <path className="prefix__cls-38" d="m282.51 258.13.8.46-4.06 2.35-.8-.47 4.06-2.34z" />
          <path className="prefix__cls-28" d="m279.25 261.97-.8-.47v-1.03l.8.47v1.03" />
          <path className="prefix__cls-39" d="m279.25 261.97 4.06-2.35v-1.03l-4.06 2.35v1.03z" />
          <path className="prefix__cls-50" d="M282.51 244.05v-7.03l-4.06 2.34v7.04l4.06-2.35z" />
          <path className="prefix__cls-38" d="m282.51 244.05.8.47-4.06 2.34-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-28" d="m279.25 247.9-.8-.47v-1.03l.8.46v1.04" />
          <path className="prefix__cls-39" d="m279.25 247.9 4.06-2.35v-1.03l-4.06 2.34v1.04z" />
          <path className="prefix__cls-50" d="M282.51 229.98v-7.04l-4.06 2.35v7.04l4.06-2.35z" />
          <path className="prefix__cls-38" d="m282.51 229.98.8.46-4.06 2.35-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-28" d="m279.25 233.82-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-39" d="m279.25 233.82 4.06-2.34v-1.04l-4.06 2.35v1.03z" />
          <path className="prefix__cls-34" d="M293.55 275.2v-7.03l-4.06 2.34v7.04l4.06-2.35z" />
          <path className="prefix__cls-11" d="m293.55 275.2.8.47-4.06 2.34-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-72" d="m290.29 279.05-.8-.47v-1.03l.8.46v1.04" />
          <path className="prefix__cls-13" d="m290.29 279.05 4.06-2.35v-1.03l-4.06 2.34v1.04z" />
          <path className="prefix__cls-34" d="M293.55 261.13v-7.03l-4.06 2.34v7.04l4.06-2.35z" />
          <path className="prefix__cls-11" d="m293.55 261.13.8.47-4.06 2.34-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-72" d="m290.29 264.97-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-13" d="m290.29 264.97 4.06-2.34v-1.03l-4.06 2.34v1.03z" />
          <path className="prefix__cls-34" d="M293.55 247.06v-7.04l-4.06 2.35v7.04l4.06-2.35z" />
          <path className="prefix__cls-11" d="m293.55 247.06.8.46-4.06 2.35-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-72" d="m290.29 250.9-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-13" d="m290.29 250.9 4.06-2.34v-1.04l-4.06 2.35v1.03z" />
          <path className="prefix__cls-34" d="M293.55 232.99v-7.03l-4.06 2.34v7.04l4.06-2.35z" />
          <path className="prefix__cls-11" d="m293.55 232.99.8.47-4.06 2.34-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-72" d="m290.29 236.83-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-13" d="m290.29 236.83 4.06-2.34v-1.03l-4.06 2.34v1.03z" />
          <path className="prefix__cls-34" d="M293.55 218.92v-7.04l-4.06 2.35v7.03l4.06-2.34z" />
          <path className="prefix__cls-11" d="m293.55 218.92.8.46-4.06 2.35-.8-.46 4.06-2.35z" />
          <path className="prefix__cls-72" d="m290.29 222.76-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-13" d="m290.29 222.76 4.06-2.35v-1.03l-4.06 2.35v1.03z" />
          <path className="prefix__cls-11" d="m297.13 278.3-10.16 5.83v4.25l14.22-8.21-4.06-1.87z" />
          <path
            style={{
              mixBlendMode: "multiply",
            }}
            fill="#2d313f"
            opacity={0.15}
            d="m286.97 284.13 6.29-3.61 3.87 2-10.16 5.86v-4.25z"
          />
          <path className="prefix__cls-13" d="M301.19 280.17v2.35l-14.22 8.21v-2.35l14.22-8.21z" />
          <path className="prefix__cls-38" d="m315.41 271.97-2.04-1.18v2.36l2.04-1.18z" />
          <path
            className="prefix__cls-11"
            d="m313.37 200.44-44.65-25.82-11.95 6.91 4.06 2.34-14.48 8.36-4.06-2.35-12.19 7.04 44.69 25.8 12.18-7.04-4.06-2.34 14.22-8.21 4.06 2.34 12.18-7.03z"
          />
          <path
            className="prefix__cls-48"
            d="m268.72 177-8.16 4.67 4.08 2.36-18.29 10.54-4.06-2.34-8.13 4.69 40.63 23.34 8.12-4.58-4.06-2.34 18.63-10.36 3.71 2.15 8.12-4.69L268.72 177z"
          />
          <path className="prefix__cls-13" d="m301.19 291.9 12.19-7.04v-84.42l-12.19 7.03v84.43z" />
          <path className="prefix__cls-50" d="m308.92 271.02-.01-7.03-4.06 2.34v7.04l4.07-2.35z" />
          <path className="prefix__cls-38" d="m308.92 271.02.79.47-4.06 2.34-.8-.46 4.07-2.35z" />
          <path className="prefix__cls-28" d="m305.65 274.86-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-39" d="m305.65 274.86 4.06-2.34v-1.03l-4.06 2.34v1.03z" />
          <path className="prefix__cls-50" d="m308.92 256.95-.01-7.04-4.06 2.35v7.04l4.07-2.35z" />
          <path className="prefix__cls-38" d="m308.92 256.95.79.47-4.06 2.34-.8-.46 4.07-2.35z" />
          <path className="prefix__cls-28" d="m305.65 260.79-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-39" d="m305.65 260.79 4.06-2.34v-1.03l-4.06 2.34v1.03z" />
          <path className="prefix__cls-50" d="m308.92 242.88-.01-7.04-4.06 2.35v7.04l4.07-2.35z" />
          <path className="prefix__cls-38" d="m308.92 242.88.79.46-4.06 2.35-.8-.46 4.07-2.35z" />
          <path className="prefix__cls-28" d="m305.65 246.72-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-39" d="m305.65 246.72 4.06-2.34v-1.04l-4.06 2.35v1.03z" />
          <path className="prefix__cls-50" d="m308.92 228.81-.01-7.04-4.06 2.35v7.03l4.07-2.34z" />
          <path className="prefix__cls-38" d="m308.92 228.81.79.46-4.06 2.35-.8-.47 4.07-2.34z" />
          <path className="prefix__cls-28" d="m305.65 232.65-.8-.46v-1.04l.8.47v1.03" />
          <path className="prefix__cls-39" d="m305.65 232.65 4.06-2.35v-1.03l-4.06 2.35v1.03z" />
          <path className="prefix__cls-50" d="m308.92 214.74-.01-7.04-4.06 2.35v7.03l4.07-2.34z" />
          <path className="prefix__cls-38" d="m308.92 214.74.79.46-4.06 2.35-.8-.47 4.07-2.34z" />
          <path className="prefix__cls-28" d="m305.65 218.58-.8-.46v-1.04l.8.47v1.03" />
          <path className="prefix__cls-39" d="m305.65 218.58 4.06-2.35v-1.03l-4.06 2.35v1.03z" />
          <path className="prefix__cls-12" d="M268.72 177v2.31l38.56 22.3 2.03-1.17L268.72 177z" />
          <path
            className="prefix__cls-13"
            d="m260.56 181.67 8.16-4.67v2.31l-6.09 3.56-2.07-1.2zm4.08 2.36v2.33l-18.29 10.56v-2.35l18.29-10.54z"
          />
          <path className="prefix__cls-12" d="M242.29 192.23v2.34l4.06 2.35v-2.35l-4.06-2.34z" />
          <path
            className="prefix__cls-54"
            d="m268.72 177 1.35 3.09-6.13 3.53-3.38-1.95 8.16-4.67zm-4.08 7.03 1.35 3.09-18.46 10.53-1.18-.73v-2.35l18.29-10.54z"
          />
          <path className="prefix__cls-13" d="m234.16 196.92 8.13-4.69v2.34l-6.09 3.52-2.04-1.17z" />
          <path className="prefix__cls-54" d="m242.32 192.23 1.35 3.09-6.13 3.53-3.38-1.93 8.16-4.69z" />
          <path className="prefix__cls-12" d="M278.85 213.34v2.34l2 1.16 2.06-1.16-4.06-2.34z" />
          <path className="prefix__cls-31" d="m204.24 368.56.79-.47v-21.56l-.79-.24v22.27z" />
          <path className="prefix__cls-30" d="m204.24 346.06 6.45 1.86-.8.46-6.45-1.86.8-.46z" />
          <path className="prefix__cls-16" d="m204.24 345.6 6.45 1.86-.8.46-6.45-1.86.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m203.44 368.09.8.47v-22.27l-.8-.23v22.03zm8.56-19.44a.21.21 0 0 1 0 .4l-.11.07a.76.76 0 0 1-.69 0l-1.26-.73.8-.46z"
          />
          <path
            className="prefix__cls-30"
            transform="rotate(-89.94 211.843 348.622)"
            d="M211.62 348.38h.47v.49h-.47z"
          />
          <path
            className="prefix__cls-16"
            d="M212 348.19a.21.21 0 0 1 0 .4l-.11.07a.8.8 0 0 1-.69 0l-1.26-.73.8-.46z"
          />
          <path className="prefix__cls-31" d="m248.91 343.03.8-.47V321l-.8-.24v22.27z" />
          <path className="prefix__cls-30" d="m248.91 320.53 6.45 1.86-.79.46-6.45-1.86.79-.46z" />
          <path className="prefix__cls-16" d="m248.91 320.07 6.45 1.86-.79.46-6.45-1.86.79-.46z" />
          <path
            className="prefix__cls-30"
            d="m248.12 342.56.79.47v-22.27l-.79-.23v22.03zm8.51-19.44a.21.21 0 0 1 0 .4l-.12.07a.71.71 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-30" transform="rotate(-89.94 256.523 323.095)" d="M256.3 322.85h.47v.49h-.47z" />
          <path
            className="prefix__cls-16"
            d="M256.63 322.66a.21.21 0 0 1 0 .4l-.12.06a.71.71 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-31" d="m293.59 317.5.8-.47v-21.56l-.8-.24v22.27z" />
          <path className="prefix__cls-30" d="m293.59 295 6.45 1.86-.79.46-6.45-1.86.79-.46z" />
          <path className="prefix__cls-16" d="m293.59 294.54 6.45 1.86-.79.46-6.45-1.86.79-.46z" />
          <path
            className="prefix__cls-30"
            d="m292.8 317.03.79.47v-22.27l-.79-.23v22.03zm8.51-19.44a.21.21 0 0 1 0 .4l-.12.07a.74.74 0 0 1-.68 0l-1.26-.74.79-.46z"
          />
          <path
            className="prefix__cls-30"
            transform="rotate(-89.94 301.199 297.563)"
            d="M300.98 297.32h.47v.49h-.47z"
          />
          <path
            className="prefix__cls-16"
            d="M301.31 297.13a.21.21 0 0 1 0 .4l-.12.07a.71.71 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-31" d="m338.27 291.98.8-.48v-21.56l-.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m338.27 269.47 6.45 1.86-.79.47-6.45-1.87.79-.46z" />
          <path className="prefix__cls-16" d="m338.27 269.01 6.45 1.86-.79.46-6.45-1.86.79-.46z" />
          <path
            className="prefix__cls-30"
            d="m337.48 291.5.79.48V269.7l-.79-.23v22.03zm8.52-19.44a.21.21 0 0 1 0 .4l-.12.07a.74.74 0 0 1-.68 0l-1.26-.74.79-.46z"
          />
          <path
            className="prefix__cls-30"
            transform="rotate(-89.94 345.884 272.032)"
            d="M345.65 271.79h.47v.49h-.47z"
          />
          <path
            className="prefix__cls-16"
            d="M346 271.6a.21.21 0 0 1 0 .4l-.12.07a.71.71 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-31" d="m404.44 252.26.8-.47v-21.57l-.8-.23v22.27z" />
          <path className="prefix__cls-30" d="m404.44 229.76 6.45 1.86-.79.46-6.46-1.86.8-.46z" />
          <path className="prefix__cls-16" d="m404.44 229.29 6.45 1.87-.79.46-6.46-1.87.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m403.64 251.79.8.47v-22.27l-.8-.24v22.04zm8.52-19.44a.21.21 0 0 1 0 .4l-.12.07a.77.77 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-30" d="M411.82 232.09h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M412.16 231.89a.21.21 0 0 1 0 .4l-.12.06a.74.74 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-31" d="m449.12 226.73.8-.47V204.7l-.8-.24v22.27z" />
          <path className="prefix__cls-30" d="m449.12 204.23 6.45 1.86-.8.46-6.45-1.86.8-.46z" />
          <path className="prefix__cls-16" d="m449.12 203.77 6.45 1.86-.8.46-6.45-1.86.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m448.32 226.26.8.47v-22.27l-.8-.23v22.03zm8.52-19.44a.21.21 0 0 1 0 .4l-.12.07a.74.74 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-30" d="M456.49 206.56h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M456.84 206.36a.21.21 0 0 1 0 .4l-.12.06a.74.74 0 0 1-.68 0l-1.26-.73.79-.46z"
          />
          <path className="prefix__cls-31" d="m486.78 205.3.8-.47v-21.57l-.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m486.78 182.79 6.45 1.87-.79.46-6.45-1.87.79-.46z" />
          <path className="prefix__cls-16" d="m486.78 182.33 6.45 1.86-.79.46-6.45-1.86.79-.46z" />
          <path
            className="prefix__cls-30"
            d="m485.99 204.83.79.47v-22.28l-.79-.23v22.04zm8.51-19.45a.21.21 0 0 1 0 .4l-.12.07a.74.74 0 0 1-.68 0l-1.26-.74.79-.46z"
          />
          <path
            className="prefix__cls-30"
            transform="rotate(-89.89 494.398 185.359)"
            d="M494.17 185.11h.47v.49h-.47z"
          />
          <path
            className="prefix__cls-16"
            d="M494.5 184.92a.21.21 0 0 1 0 .4l-.12.07a.74.74 0 0 1-.68 0l-1.26-.74.79-.46z"
          />
          <path className="prefix__cls-31" d="m545.43 170.88.8-.47v-21.57l-.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m545.43 148.38 6.45 1.86-.8.46-6.45-1.86.8-.46z" />
          <path className="prefix__cls-16" d="m545.43 147.91 6.45 1.86-.8.46-6.45-1.86.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m544.63 170.41.8.47V148.6l-.8-.23v22.04zm8.52-19.41c.19.11.19.28 0 .39l-.12.07a.76.76 0 0 1-.69 0l-1.26-.74.8-.46z"
          />
          <path className="prefix__cls-30" transform="rotate(-89.89 553.031 150.95)" d="M552.81 150.69h.47v.49h-.47z" />
          <path
            className="prefix__cls-16"
            d="M553.15 150.5a.21.21 0 0 1 0 .4l-.15.1a.76.76 0 0 1-.69 0l-1.26-.74.8-.46z"
          />
          <path className="prefix__cls-39" d="m351.92 379.85-16.25 9.38v-72.71l16.25-9.38v72.71z" />
          <path
            className="prefix__cls-41"
            d="m347.86 377.5-.01-7.04-4.06 2.35v7.04l4.07-2.35zm-4.07 2.35v-7.04l-4.06 2.34v7.04l4.06-2.34z"
          />
          <path className="prefix__cls-11" d="m347.86 377.5.79.46-8.12 4.69-.8-.46 8.13-4.69z" />
          <path className="prefix__cls-13" d="m340.53 383.69-.8-.47v-1.03l.8.46v1.04" />
          <path className="prefix__cls-12" d="m340.53 383.69 8.12-4.69v-1.04l-8.12 4.69v1.04z" />
          <path className="prefix__cls-34" d="m344 372.7-.41.23v7.04l.41-.24v-7.03z" />
          <path className="prefix__cls-39" d="m311.3 403.3-16.25 9.38v-72.7l16.25-9.38v72.7z" />
          <path
            className="prefix__cls-41"
            d="m347.86 363.43-.01-7.04-4.06 2.35v7.03l4.07-2.34zm-4.07 2.34v-7.03l-4.06 2.34v7.04l4.06-2.35z"
          />
          <path className="prefix__cls-11" d="m347.86 363.43.79.46-8.12 4.69-.8-.46 8.13-4.69z" />
          <path className="prefix__cls-13" d="m340.53 369.62-.8-.47v-1.03l.8.46v1.04" />
          <path className="prefix__cls-12" d="m340.53 369.62 8.12-4.69v-1.04l-8.12 4.69v1.04z" />
          <path className="prefix__cls-34" d="m344 358.63-.41.23v7.03l.41-.23v-7.03z" />
          <path
            className="prefix__cls-41"
            d="m347.86 349.36-.01-7.04-4.06 2.35v7.03l4.07-2.34zm-4.07 2.34v-7.03l-4.06 2.34v7.04l4.06-2.35z"
          />
          <path className="prefix__cls-11" d="m347.86 349.36.79.46-8.12 4.69-.8-.46 8.13-4.69z" />
          <path className="prefix__cls-13" d="m340.53 355.54-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-12" d="m340.53 355.54 8.12-4.69v-1.03l-8.12 4.69v1.03z" />
          <path className="prefix__cls-34" d="m344 344.56-.41.23v7.03l.41-.23v-7.03z" />
          <path
            className="prefix__cls-41"
            d="m347.86 335.29-.01-7.04-4.06 2.35v7.03l4.07-2.34zm-4.07 2.34v-7.03l-4.06 2.34v7.04l4.06-2.35z"
          />
          <path className="prefix__cls-11" d="m347.86 335.29.79.46-8.12 4.69-.8-.46 8.13-4.69z" />
          <path className="prefix__cls-13" d="m340.53 341.47-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-12" d="m340.53 341.47 8.12-4.69v-1.03l-8.12 4.69v1.03z" />
          <path className="prefix__cls-34" d="m344 330.49-.41.23v7.03l.41-.23v-7.03z" />
          <path
            className="prefix__cls-41"
            d="m347.86 321.21-.01-7.03-4.06 2.34v7.04l4.07-2.35zm-4.07 2.35v-7.04l-4.06 2.35v7.04l4.06-2.35z"
          />
          <path className="prefix__cls-12" d="m347.86 321.21.79.47-8.12 4.69-.8-.46 8.13-4.7z" />
          <path className="prefix__cls-13" d="m340.53 327.4-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-12" d="m340.53 327.4 8.12-4.69v-1.03l-8.12 4.69v1.03z" />
          <path className="prefix__cls-34" d="m344 316.41-.41.24v7.03l.41-.23v-7.04z" />
          <path
            className="prefix__cls-41"
            d="M307.23 400.94v-7.03l-4.06 2.34v7.04l4.06-2.35zm-4.06 2.35v-7.04l-4.06 2.35v7.03l4.06-2.34z"
          />
          <path className="prefix__cls-11" d="m307.23 400.94.8.47-8.12 4.69-.8-.47 8.12-4.69z" />
          <path className="prefix__cls-13" d="m299.91 407.13-.8-.46v-1.04l.8.47v1.03" />
          <path className="prefix__cls-12" d="m299.91 407.13 8.12-4.69v-1.03l-8.12 4.69v1.03z" />
          <path className="prefix__cls-34" d="m303.37 396.14-.4.23v7.04l.41-.23-.01-7.04z" />
          <path
            className="prefix__cls-41"
            d="M307.23 386.87v-7.03l-4.06 2.34v7.04l4.06-2.35zm-4.06 2.35v-7.04l-4.06 2.35v7.03l4.06-2.34z"
          />
          <path className="prefix__cls-11" d="m307.23 386.87.8.47-8.12 4.69-.8-.47 8.12-4.69z" />
          <path className="prefix__cls-13" d="m299.91 393.06-.8-.46v-1.04l.8.47v1.03" />
          <path className="prefix__cls-12" d="m299.91 393.06 8.12-4.69v-1.03l-8.12 4.69v1.03z" />
          <path className="prefix__cls-34" d="m303.37 382.07-.4.23v7.04l.41-.23-.01-7.04z" />
          <path
            className="prefix__cls-41"
            d="M307.23 372.8v-7.04l-4.06 2.35v7.04l4.06-2.35zm-4.06 2.35v-7.04l-4.06 2.34v7.04l4.06-2.34z"
          />
          <path className="prefix__cls-11" d="m307.23 372.8.8.46-8.12 4.69-.8-.46 8.12-4.69z" />
          <path className="prefix__cls-13" d="m299.91 378.99-.8-.47v-1.03l.8.46v1.04" />
          <path className="prefix__cls-12" d="m299.91 378.99 8.12-4.69v-1.04l-8.12 4.69v1.04z" />
          <path className="prefix__cls-34" d="m303.37 368-.4.23v7.04l.41-.24-.01-7.03z" />
          <path
            className="prefix__cls-41"
            d="M307.23 358.73v-7.04l-4.06 2.35v7.03l4.06-2.34zm-4.06 2.34v-7.03l-4.06 2.34v7.04l4.06-2.35z"
          />
          <path className="prefix__cls-11" d="m307.23 358.73.8.46-8.12 4.69-.8-.46 8.12-4.69z" />
          <path className="prefix__cls-13" d="m299.91 364.92-.8-.47v-1.03l.8.46v1.04" />
          <path className="prefix__cls-12" d="m299.91 364.92 8.12-4.69v-1.04l-8.12 4.69v1.04z" />
          <path className="prefix__cls-34" d="m303.37 353.93-.4.23v7.03l.41-.23-.01-7.03z" />
          <path
            className="prefix__cls-41"
            d="M307.23 344.66v-7.04l-4.06 2.35V347l4.06-2.34zm-4.06 2.34v-7.03l-4.06 2.34v7.04l4.06-2.35z"
          />
          <path className="prefix__cls-11" d="m307.23 344.66.8.46-8.12 4.69-.8-.46 8.12-4.69z" />
          <path className="prefix__cls-13" d="m299.91 350.84-.8-.46v-1.03l.8.46v1.03" />
          <path className="prefix__cls-12" d="m299.91 350.84 8.12-4.69v-1.03l-8.12 4.69v1.03z" />
          <path className="prefix__cls-34" d="m303.37 339.86-.4.23v7.03l.41-.23-.01-7.03z" />
          <path
            className="prefix__cls-28"
            d="m335.67 389.23-4.06-2.35v-72.7l4.06 2.34v72.71zm-40.62 23.45-4.06-2.35v-72.7l4.06 2.35v72.7z"
          />
          <path className="prefix__cls-9" d="m331.61 386.88-20.31 11.73V330.6l-4.07-2.35 24.38-14.07v72.7z" />
          <path
            className="prefix__cls-17"
            d="m351.92 307.14 4.06 2.35 16.25-9.38-32.1-18.76-77.58 44.56 24.37 14.07 4.07-2.35 4.06 2.35 16.25-9.38-4.07-2.35 24.38-14.07 4.06 2.34 16.25-9.38z"
          />
          <path className="prefix__cls-16" d="m351.92 307.14 4.06 2.35v72.7l-4.06-2.34v-72.71z" />
          <path className="prefix__cls-9" d="M372.23 300.11v72.7l-16.25 9.38v-72.7l16.25-9.38z" />
          <path className="prefix__cls-40" d="M353.95 376.33v-7.04l2.03 1.17v7.04l-2.03-1.17z" />
          <path className="prefix__cls-41" d="m355.98 377.5 14.22-8.21v-7.03l-14.22 8.2v7.04z" />
          <path className="prefix__cls-40" d="M353.95 362.26v-7.03l2.03 1.17v7.03l-2.03-1.17z" />
          <path className="prefix__cls-41" d="m355.98 363.43 14.22-8.2v-7.04l-14.22 8.21v7.03z" />
          <path className="prefix__cls-40" d="M353.95 348.19v-7.03l2.03 1.17v7.04l-2.03-1.18z" />
          <path className="prefix__cls-41" d="m355.98 349.37 14.22-8.21v-7.04l-14.22 8.21v7.04z" />
          <path className="prefix__cls-40" d="M353.95 334.13v-7.04l2.03 1.17v7.04l-2.03-1.17z" />
          <path className="prefix__cls-41" d="m355.98 335.3 14.22-8.21v-7.03l-14.22 8.2v7.04z" />
          <path className="prefix__cls-40" d="M353.95 320.06v-7.03l2.03 1.17v7.03l-2.03-1.17z" />
          <path className="prefix__cls-41" d="m355.98 321.23 14.22-8.21v-7.03l-14.22 8.21v7.03z" />
          <path className="prefix__cls-9" d="m290.99 410.33-4.07 2.35v-72.7l4.07-2.35v72.7z" />
          <path className="prefix__cls-16" d="m286.92 412.68-24.37-14.07v-72.7l24.37 14.07v72.7z" />
          <path className="prefix__cls-41" d="m288.95 350.53-2.03 1.17v-9.37l2.03-1.18v9.38z" />
          <path
            className="prefix__cls-40"
            d="m262.55 328.25 10.85 6.27v9.38l-10.85-6.27v-9.38zm13.52 7.82 10.85 6.27v9.38l-10.85-6.26v-9.39z"
          />
          <path className="prefix__cls-41" d="m288.95 364.6-2.03 1.17v-9.38l2.03-1.18v9.39z" />
          <path
            className="prefix__cls-40"
            d="m262.55 342.31 10.85 6.27v9.38l-10.85-6.27v-9.38zm13.52 7.83 10.85 6.26v9.39l-10.85-6.27v-9.38z"
          />
          <path className="prefix__cls-41" d="m288.95 378.66-2.03 1.17v-9.38l2.03-1.17v9.38z" />
          <path
            className="prefix__cls-40"
            d="m262.55 356.38 10.85 6.26v9.38l-10.85-6.26v-9.38zm13.52 7.82 10.85 6.27v9.38l-10.85-6.27v-9.38z"
          />
          <path className="prefix__cls-41" d="m288.95 392.72-2.03 1.17v-9.37l2.03-1.18v9.38z" />
          <path
            className="prefix__cls-40"
            d="m262.55 370.44 10.85 6.27v9.38l-10.85-6.27v-9.38zm13.52 7.82 10.85 6.27v9.38l-10.85-6.26v-9.39z"
          />
          <path className="prefix__cls-41" d="m288.95 406.79-2.03 1.17v-9.38l2.03-1.18v9.39z" />
          <path
            className="prefix__cls-40"
            d="m262.55 384.5 10.85 6.27v9.38l-10.85-6.26v-9.39zm13.52 7.83 10.85 6.27v9.38l-10.85-6.27v-9.38z"
          />
          <path className="prefix__cls-41" d="M329.21 388.27v-9.39l-16.25 9.38v9.4l16.25-9.39z" />
          <path className="prefix__cls-34" d="m321.48 383.33-.79.48v9.39l.79-.48v-9.39z" />
          <path
            className="prefix__cls-41"
            d="M329.21 374.2v-9.38l-6.86 3.97v9.38l6.86-3.97zm-9.39 5.41v-9.38l-6.86 3.96v9.39l6.86-3.97zm9.39-19.48v-9.38l-6.86 3.96v9.38l6.86-3.96zm-9.39 5.41v-9.38l-6.86 3.96v9.38l6.86-3.96zm9.39-19.48v-9.38l-6.86 3.96v9.38l6.86-3.96zm-9.39 5.41v-9.38l-6.86 3.96v9.39l6.86-3.97zm9.39-19.48v-9.38l-6.86 3.96v9.38l6.86-3.96zm-9.39 5.41v-9.38l-6.86 3.96v9.38l6.86-3.96z"
          />
          <path
            className="prefix__cls-57"
            d="m339.73 283.69 28.44 16.42-12.19 7.03-4.06-2.34-16.25 9.38-4.06-2.35-28.44 16.42 4.07 2.35-12.19 7.03-4.06-2.34-4.07 2.34-20.31-11.72 73.12-42.22z"
          />
          <path className="prefix__cls-54" d="m303.17 328.25 4.07 2.35-5.05 2.91-2.05-1.19 3.03-1.72v-2.35z" />
          <path className="prefix__cls-9" d="M339.73 283.69v2.35l-71.06 41.05-2.06-1.18 73.12-42.22z" />
          <path className="prefix__cls-54" d="m339.73 283.69 2.39 3.72-70.94 41.13-4.57-2.63 73.12-42.22z" />
          <path className="prefix__cls-7" d="m368.17 300.11-28.44-16.42v2.35l26.43 15.23 2.01-1.16z" />
          <path
            className="prefix__cls-9"
            d="M303.17 328.25v2.35l2.03 1.17 2.04-1.17-4.07-2.35zm60.93-204.03 4.07-2.35-20.31-11.72-4.07 2.34 20.31 11.73z"
          />
          <path
            className="prefix__cls-9"
            d="m360.04 126.56-.62-.36 8.15-4.69.6.36-8.13 4.69zm-19.69-11.37-.62-.35 8.15-4.69.59.35-8.12 4.69z"
          />
          <path className="prefix__cls-12" d="m347.86 105.45-28.44-16.41V46.81l28.43 16.43.01 42.21z" />
          <path
            className="prefix__cls-61"
            d="M323.49 86.68v-4.69l4.06 2.34v4.69l-4.06-2.34zm8.12 4.69v-4.69l4.06 2.34v4.69l-4.06-2.34zm-8.12-14.07v-4.69l4.06 2.35v4.69l-4.06-2.35zm8.12 4.69V77.3l4.06 2.35v4.69l-4.06-2.35zm-8.12-14.06v-4.69l4.06 2.34v4.69l-4.06-2.34zm8.12 4.69v-4.69l4.06 2.34v4.69l-4.06-2.34zm-8.12-14.07v-4.69l4.06 2.35v4.69l-4.06-2.35zm8.12 4.69v-4.69l4.06 2.35v4.69l-4.06-2.35zm8.13 32.82v-4.69l4.06 2.34v4.69l-4.06-2.34zm0-9.38v-4.69l4.06 2.35v4.69l-4.06-2.35zm0-9.37v-4.7l4.06 2.35v4.69l-4.06-2.34zm0-9.38v-4.69l4.06 2.34v4.7l-4.06-2.35z"
          />
          <path
            className="prefix__cls-40"
            d="m340.74 85.94 3.06 1.77v-3.37l-3.06-1.77v3.37zm-8.13-14.06 3.06 1.77v-3.38l-3.06-1.77v3.38zm0-9.37 3.06 1.76V60.9l-3.06-1.77v3.38zm8.13 32.81 3.06 1.77v-3.38l-3.06-1.77v3.38zm0-28.13 3.06 1.77v-3.38l-3.06-1.76v3.37zm0 9.38 3.06 1.77v-3.38l-3.06-1.77v3.38zm-16.25-9.38 3.06 1.77v-3.38l-3.06-1.77v3.38zm0 9.38 3.06 1.76v-3.37l-3.06-1.77v3.38zm8.12 4.69 3.06 1.76v-3.37l-3.06-1.77v3.38zm-8.12 4.68 3.06 1.77v-3.38l-3.06-1.77v3.38zm0-28.13 3.06 1.77v-3.37l-3.06-1.77v3.37zm8.12 32.82 3.06 1.77v-3.38l-3.06-1.76v3.37z"
          />
          <path
            className="prefix__cls-41"
            d="m323.49 53.86 1 .58v3.37l-1 .74v-4.69zm8.12 4.67 1 .58v3.38l-1 .74v-4.7zm8.12 4.68 1 .57v3.38l-1 .74v-4.69zm-16.24.04 1 .58v3.38l-1 .73v-4.69zm8.12 4.68 1 .57v3.38l-1 .74v-4.69zm8.12 4.67 1 .58v3.37l-1 .74V72.6zm-16.24.05 1 .57v3.38l-1 .74v-4.69zm8.12 4.67 1 .58v3.37l-1 .74v-4.69zm8.12 4.67 1 .58v3.38l-1 .73v-4.69zm-16.24.05 1 .58v3.37l-1 .74v-4.69zm8.12 4.67 1 .58v3.38l-1 .73v-4.69zm8.12 4.68 1 .57v3.38l-1 .74v-4.69z"
          />
          <path className="prefix__cls-11" d="m372.23 49.17-28.44-16.42-24.37 14.07 28.43 16.43 24.38-14.08z" />
          <path className="prefix__cls-48" d="m343.79 35.1-20.31 11.73 24.38 14.06 20.31-11.72-24.38-14.07z" />
          <path className="prefix__cls-49" d="M343.79 35.1v2.34l22.36 12.91 2.02-1.18-24.38-14.07z" />
          <path className="prefix__cls-13" d="m323.48 46.83 20.31-11.73v2.34L325.51 48l-2.03-1.17z" />
          <path className="prefix__cls-28" d="m343.79 107.8 28.44 16.42V77.29l-28.45-16.4.01 46.91z" />
          <path d="M347.86 110.15V98.42l20.32 11.72v11.73z" fill="#543f4e" />
          <path className="prefix__cls-39" d="m347.86 91.37 4.06 2.35v-9.38l-4.06-2.35v9.38z" />
          <path className="prefix__cls-53" d="m347.86 81.99 1 .58v8.1l-1 .7v-9.38z" />
          <path className="prefix__cls-39" d="m355.98 96.07 4.06 2.35v-9.38l-4.06-2.35v9.38z" />
          <path className="prefix__cls-53" d="m355.98 86.69 1 .58v8.1l-1 .7v-9.38z" />
          <path className="prefix__cls-39" d="m364.09 100.77 4.06 2.35v-9.38l-4.06-2.35v9.38z" />
          <path className="prefix__cls-53" d="m364.09 91.39 1 .58v8.1l-1 .7v-9.38z" />
          <path
            className="prefix__cls-40"
            d="m365.09 100.07 3.06 1.77v-8.1l-3.06-1.77v8.1zm-8.11-4.7 3.06 1.77v-8.1l-3.06-1.77v8.1zm-8.12-4.7 3.06 1.77v-8.1l-3.06-1.77v8.1z"
          />
          <path className="prefix__cls-62" d="M360.04 115.01v11.55l.62-.36v-11.57l-.62.38z" />
          <path className="prefix__cls-75" d="M360.04 115.01v11.55l-.62-.36v-11.57l.62.38z" />
          <path className="prefix__cls-62" d="M340.35 103.64v11.55l.61-.35v-11.58l-.61.38z" />
          <path className="prefix__cls-75" d="M340.35 103.64v11.55l-.62-.35v-11.58l.62.38z" />
          <path className="prefix__cls-12" d="m404.73 138.29-28.44-16.42V79.64l28.43 16.43.01 42.22z" />
          <path
            className="prefix__cls-61"
            d="M380.35 119.52v-4.69l4.06 2.34v4.69l-4.06-2.34zm8.13 4.69v-4.69l4.06 2.34v4.69l-4.06-2.34zm-8.13-14.07v-4.69l4.06 2.35v4.69l-4.06-2.35zm8.13 4.69v-4.69l4.06 2.35v4.69l-4.06-2.35zm-8.13-14.06v-4.69l4.06 2.34v4.69l-4.06-2.34zm8.13 4.69v-4.69l4.06 2.34v4.69l-4.06-2.34zm-8.13-14.07V86.7l4.06 2.34v4.69l-4.06-2.34zm8.13 4.69v-4.69l4.06 2.34v4.69l-4.06-2.34zm8.12 32.82v-4.7l4.06 2.35v4.69l-4.06-2.34zm0-9.38v-4.69l4.06 2.34v4.69l-4.06-2.34zm0-9.38v-4.69l4.06 2.35v4.69l-4.06-2.35zm0-9.37v-4.69l4.06 2.34v4.69l-4.06-2.34z"
          />
          <path
            className="prefix__cls-40"
            d="m397.6 118.78 3.06 1.77v-3.38l-3.06-1.76v3.37zm-8.12-14.06 3.06 1.77v-3.38l-3.06-1.77v3.38zm0-9.38 3.06 1.77v-3.38l-3.06-1.76v3.37zm8.12 32.82 3.06 1.77v-3.38l-3.06-1.77v3.38zm0-28.13 3.06 1.77v-3.38l-3.06-1.77v3.38zm0 9.38 3.06 1.76v-3.37l-3.06-1.77v3.38zm-16.25-9.38 3.06 1.77v-3.38l-3.06-1.77v3.38zm0 9.37 3.06 1.77v-3.37l-3.06-1.77v3.37zm8.13 4.69 3.06 1.77v-3.37l-3.06-1.77v3.37zm-8.13 4.69 3.06 1.77v-3.38l-3.06-1.77v3.38zm0-28.13 3.06 1.77v-3.38l-3.06-1.76v3.37zm8.13 32.82 3.06 1.77v-3.38l-3.06-1.77v3.38z"
          />
          <path
            className="prefix__cls-41"
            d="m380.35 86.7 1 .58v3.37l-1 .74V86.7zm8.13 4.67 1 .58v3.38l-1 .73v-4.69zm8.12 4.68 1 .57V100l-1 .74v-4.69zm-16.25.04 1 .58v3.38l-1 .73v-4.69zm8.13 4.68 1 .57v3.38l-1 .74v-4.69zm8.12 4.67 1 .58v3.37l-1 .74v-4.69zm-16.25.04 1 .58v3.38l-1 .74v-4.7zm8.13 4.68 1 .57v3.38l-1 .74v-4.69zm8.12 4.67 1 .58v3.37l-1 .74v-4.69zm-16.25.05 1 .58v3.37l-1 .74v-4.69zm8.13 4.67 1 .58v3.37l-1 .74v-4.69zm8.12 4.67 1 .58v3.38l-1 .73v-4.69z"
          />
          <path
            className="prefix__cls-11"
            d="m349.7 73.67.63.37v.22a1.1 1.1 0 0 0 .53 1.08c.31.18.48.12.48-.16a1.89 1.89 0 0 0-.38-1l-.85-1.36a2.68 2.68 0 0 1-.47-1.31c0-.62.45-.79 1.23-.34a2.07 2.07 0 0 1 1.23 1.69 1.94 1.94 0 0 1-.08.5l-.63-.36v-.22a1.12 1.12 0 0 0-.52-1.06c-.31-.18-.46-.11-.46.14a1.45 1.45 0 0 0 .25.73l.95 1.53a2.94 2.94 0 0 1 .53 1.43c0 .66-.49.79-1.27.34-1-.57-1.25-1.21-1.25-1.71a1.31 1.31 0 0 1 .08-.51zm2.98 1.7v-1.64c0-1.4.81-1.06 1.3-.78a1.89 1.89 0 0 1 1.12 1.63 2.18 2.18 0 0 1-.06.52l-.66-.38v-.24c0-.51-.14-.84-.39-1s-.45-.08-.45.51v2.12c0 .58.12.82.44 1s.4.07.4-.3v-.46l.75.43v.43c0 .74-.41.86-1.15.43a2.48 2.48 0 0 1-1.3-2.27zm3.09-1.37.81.47v2l1 .55v-1.97l.81.47v4.64l-.81-.47v-2.14l-1-.56v2.14l-.81-.47zm3.37 5.1v-1.65c0-1.39.83-1 1.33-.75a2.45 2.45 0 0 1 1.33 2.3v1.64c0 1.38-.86 1.06-1.33.79a2.51 2.51 0 0 1-1.33-2.33zm1.86 1.32v-2.11c0-.6-.16-.87-.48-1.06s-.48-.09-.48.5v2.11c0 .58.15.84.48 1s.48.14.48-.44zm1.42.58v-1.65c0-1.4.83-1 1.33-.76a2.45 2.45 0 0 1 1.33 2.29v1.65c0 1.37-.86 1-1.33.78a2.51 2.51 0 0 1-1.33-2.31zm1.81 1.32V80.2c0-.59-.16-.87-.48-1s-.48-.1-.48.5v2.11c0 .57.15.83.48 1s.48.08.48-.5zm1.61-2.48.82.47v4.09l1.11.64v.55l-1.93-1.11z"
          />
          <path className="prefix__cls-13" d="m404.73 138.29 24.37-14.08V81.99l-24.38 14.08.01 42.22z" />
          <path className="prefix__cls-11" d="m429.1 81.99-28.44-16.41-24.37 14.06 28.43 16.43 24.38-14.08z" />
          <path className="prefix__cls-48" d="m400.66 67.93-20.31 11.73 24.38 14.06 20.3-11.73-24.37-14.06z" />
          <path className="prefix__cls-49" d="M400.66 67.93v2.34l22.36 12.9 2.01-1.18-24.37-14.06z" />
          <path className="prefix__cls-13" d="m380.35 79.66 20.31-11.73v2.34l-18.28 10.55-2.03-1.16z" />
          <path className="prefix__cls-54" d="m400.66 67.93 1.76 3.35-18.13 10.63-3.94-2.27 20.31-11.71z" />
          <path className="prefix__cls-39" d="m372.23 77.29 28.43-16.4v4.69l-24.37 14.06v42.23l-4.06 2.35V77.29z" />
          <path className="prefix__cls-38" d="m343.78 60.89 28.45-16.42 28.43 16.42-28.43 16.4-28.45-16.4z" />
          <path className="prefix__cls-56" d="m372.22 74.96 24.38-14.08-24.38-14.07-24.36 14.08 24.36 14.07z" />
          <path className="prefix__cls-28" d="m372.23 49.17 22.36 12.9 2.01-1.19-24.38-14.07.01 2.36z" />
          <path className="prefix__cls-39" d="m347.86 60.89 24.36-14.08.01 2.36-22.32 12.9-2.05-1.18z" />
          <path className="prefix__cls-54" d="m372.22 46.81 1.76 3.36-22.19 12.95-3.93-2.27 24.36-14.04z" />
          <path className="prefix__cls-12" d="M339.73 103.11v2.34l20.29 11.72.02-2.34-20.31-11.72z" />
          <path className="prefix__cls-11" d="m368.17 110.14-8.13 4.69-20.31-11.72 8.15-4.65 20.29 11.68z" />
          <path className="prefix__cls-13" d="m360.04 114.83 8.13-4.69v2.34l-8.15 4.69.02-2.34z" />
          <path className="prefix__cls-54" d="m343.79 35.15 1.76 3.35-18.13 10.64-3.94-2.27 20.31-11.72z" />
          <path className="prefix__cls-9" d="m491.77 371.47 17.35-10.01v-16.7l-8.68-5.01-8.67 15.03v16.69z" />
          <path
            className="prefix__cls-41"
            d="m499 363.96 2.89-1.67v-6.68l-2.89 1.67v6.68zm0-10.02 2.89-1.67v-6.67l-2.89 1.66v6.68z"
          />
          <path className="prefix__cls-16" d="m491.77 371.47-1.75-1v-16.7l1.75 1.01v16.69z" />
          <path className="prefix__cls-17" d="m491.77 354.78 8.67-15.03-1.78-1.03-8.64 15.05 1.75 1.01z" />
          <path className="prefix__cls-9" d="m471.53 359.79 17.35-10.02v-16.7l-8.68-5.01-8.67 15.03v16.7z" />
          <path className="prefix__cls-17" d="m471.53 343.09 8.67-15.03-1.78-1.03-8.64 15.05 1.75 1.01z" />
          <path className="prefix__cls-16" d="m490.02 363.13-18.49-10.69v-1l18.49 10.72v.97z" />
          <path className="prefix__cls-8" d="m471.53 351.44 2.89-1.67 15.6 9.07v3.32l-18.49-10.72z" />
          <path className="prefix__cls-16" d="M474.42 349.77v-5.01l15.6 9.01v5.07l-15.6-9.07z" />
          <path
            className="prefix__cls-40"
            d="m479.93 347.94-4.17-2.39v4.79l4.17 2.39v-4.79zm7.01 4.04-4.17-2.4v4.8l4.17 2.39v-4.79z"
          />
          <path className="prefix__cls-16" d="M471.53 351.44v8.35l11.57 6.67v-8.34l-11.57-6.68z" />
          <path className="prefix__cls-9" d="m483.1 359.12 2.89 1.67v4.01l-2.89 1.66" />
          <path className="prefix__cls-18" d="m485.99 364.8 4.03 2.33v-4l-4.03-2.34v4.01z" />
          <path className="prefix__cls-39" d="m477 326.22 32.12 18.54 1.26.73 1.17-.67-33.28-19.34-1.27.74z" />
          <path
            className="prefix__cls-41"
            d="m471.53 350.01 18.49 10.68v.52l-18.49-10.72v-.48zm0-1.06 18.49 10.68v.52l-18.49-10.72v-.48zm0-1.07 18.49 10.68v.53l-18.49-10.72v-.49z"
          />
          <path className="prefix__cls-28" d="M472.56 360.38v-5.69l9.25 5.33v5.7l-9.25-5.34z" />
          <path className="prefix__cls-34" d="M486.94 365.35v-4l2.21 1.27v4.02l-2.21-1.29z" />
          <path className="prefix__cls-16" d="m471.53 359.79-1.81-1.05v-16.7l1.81 1.05v16.7z" />
          <path
            className="prefix__cls-28"
            transform="rotate(-60.01 485.12 340.918)"
            d="M476.43 326.55h17.35v28.74h-17.35z"
          />
          <path className="prefix__cls-34" d="m489.48 333.97-12.2-7.04-4.05 7.04 12.21 7.03 4.04-7.03z" />
          <path className="prefix__cls-76" d="m473.91 333.78 3.55-6.17 11.34 6.54-3.55 6.17-11.34-6.54z" />
          <path
            className="prefix__cls-34"
            transform="rotate(-60.12 484.208 335.616)"
            d="M480.57 335.36h7.22v.5h-7.22z"
          />
          <path
            className="prefix__cls-34"
            transform="rotate(-60.13 481.366 333.987)"
            d="M477.74 333.73h7.22v.5h-7.22z"
          />
          <path className="prefix__cls-34" transform="rotate(-60.13 478.541 332.352)" d="M474.9 332.1h7.22v.5h-7.22z" />
          <path className="prefix__cls-34" d="m487.03 337.59-11.78-6.77.25-.43 11.78 6.76-.25.44z" />
          <path className="prefix__cls-39" d="m493.22 354.26 8.67-15.02v1.35l-8.67 15.02v-1.35z" />
          <path className="prefix__cls-38" d="m501.31 340.25 1.15-.71-24.19-14.06-1.27.74 24.31 14.03z" />
          <path className="prefix__cls-9" d="m536.46 397.27 17.35-10.01v-16.7l-8.68-5.01-8.67 15.03v16.69z" />
          <path
            className="prefix__cls-41"
            d="m543.68 389.76 2.9-1.67v-6.68l-2.9 1.67v6.68zm0-10.02 2.9-1.67v-6.68l-2.9 1.67v6.68z"
          />
          <path className="prefix__cls-16" d="m536.46 397.27-1.75-1v-16.7l1.75 1.01v16.69z" />
          <path className="prefix__cls-17" d="m536.46 380.58 8.67-15.03-1.78-1.03-8.64 15.05 1.75 1.01z" />
          <path className="prefix__cls-9" d="m516.21 385.59 17.35-10.02v-16.7l-8.67-5.01-8.68 15.03v16.7z" />
          <path className="prefix__cls-17" d="m516.21 368.89 8.68-15.03-1.79-1.03-8.63 15.05 1.74 1.01z" />
          <path className="prefix__cls-16" d="m534.71 388.93-18.5-10.68v-1.01l18.5 10.72v.97z" />
          <path className="prefix__cls-8" d="m516.21 377.24 2.9-1.67 15.6 9.07v3.32l-18.5-10.72z" />
          <path className="prefix__cls-16" d="M519.11 375.57v-5.01l15.6 9.01v5.07l-15.6-9.07z" />
          <path
            className="prefix__cls-40"
            d="m524.61 373.74-4.17-2.4v4.8l4.17 2.39v-4.79zm7.02 4.04-4.17-2.4v4.8l4.17 2.39v-4.79z"
          />
          <path className="prefix__cls-16" d="M516.21 377.24v8.35l11.57 6.67v-8.34l-11.57-6.68z" />
          <path className="prefix__cls-9" d="m527.78 384.92 2.89 1.67v4.01l-2.89 1.66" />
          <path className="prefix__cls-18" d="m530.67 390.6 4.04 2.33v-4l-4.04-2.34v4.01z" />
          <path className="prefix__cls-39" d="m521.68 352.02 32.13 18.54 1.26.73 1.16-.67-33.28-19.34-1.27.74z" />
          <path
            className="prefix__cls-41"
            d="m516.21 375.81 18.5 10.68v.52l-18.5-10.72v-.48zm0-1.06 18.5 10.68v.52l-18.5-10.72v-.48zm0-1.07 18.5 10.68v.53l-18.5-10.72v-.49z"
          />
          <path className="prefix__cls-28" d="M517.25 386.18v-5.7l9.25 5.34v5.7l-9.25-5.34z" />
          <path className="prefix__cls-34" d="M531.63 391.15v-4.01l2.21 1.28v4.02l-2.21-1.29z" />
          <path className="prefix__cls-16" d="m516.21 385.59-1.81-1.05v-16.7l1.81 1.05v16.7z" />
          <path
            className="prefix__cls-28"
            transform="rotate(-60.01 529.776 366.717)"
            d="M521.12 352.35h17.35v28.74h-17.35z"
          />
          <path className="prefix__cls-34" d="m534.01 359.79-12.2-7.04-4.04 7.04 12.2 7.03 4.04-7.03z" />
          <path className="prefix__cls-76" d="m518.45 359.6 3.54-6.17 11.34 6.54-3.54 6.17-11.34-6.54z" />
          <path
            className="prefix__cls-34"
            transform="rotate(-60.12 528.755 361.432)"
            d="M525.11 361.18h7.22v.5h-7.22z"
          />
          <path
            className="prefix__cls-34"
            transform="rotate(-60.13 525.912 359.808)"
            d="M522.27 359.55h7.22v.5h-7.22z"
          />
          <path
            className="prefix__cls-34"
            transform="rotate(-60.13 523.074 358.176)"
            d="M519.43 357.92h7.22v.5h-7.22z"
          />
          <path className="prefix__cls-34" d="m531.56 363.41-11.78-6.77.25-.43 11.78 6.77-.25.43z" />
          <path className="prefix__cls-39" d="m537.9 380.06 8.68-15.02v1.35l-8.68 15.02v-1.35z" />
          <path className="prefix__cls-38" d="m545.99 366.05 1.16-.71-24.2-14.06-1.27.74 24.31 14.03z" />
          <path className="prefix__cls-9" d="m581.13 423.07 17.36-10.02v-16.7l-8.68-5-8.68 15.02v16.7z" />
          <path
            className="prefix__cls-41"
            d="m588.36 415.55 2.9-1.67v-6.67l-2.9 1.67v6.67zm0-10.01 2.9-1.67v-6.68l-2.9 1.67v6.68z"
          />
          <path className="prefix__cls-16" d="m581.13 423.07-1.74-1.01v-16.7l1.74 1.01v16.7z" />
          <path className="prefix__cls-17" d="m581.13 406.37 8.68-15.02-1.79-1.04-8.63 15.05 1.74 1.01z" />
          <path className="prefix__cls-9" d="m560.89 411.38 17.35-10.02v-16.69l-8.67-5.01-8.68 15.03v16.69z" />
          <path className="prefix__cls-17" d="m560.89 394.69 8.68-15.03-1.79-1.03-8.63 15.05 1.74 1.01z" />
          <path className="prefix__cls-16" d="m579.39 414.72-18.5-10.68v-1.01l18.5 10.73v.96z" />
          <path className="prefix__cls-8" d="m560.89 403.03 2.89-1.67 15.61 9.08v3.32l-18.5-10.73z" />
          <path className="prefix__cls-16" d="M563.78 401.36v-5.01l15.61 9.01v5.08l-15.61-9.08z" />
          <path
            className="prefix__cls-40"
            d="m569.29 399.54-4.17-2.4v4.79l4.17 2.4v-4.79zm7.02 4.04-4.17-2.4v4.79l4.17 2.4v-4.79z"
          />
          <path className="prefix__cls-16" d="M560.89 403.03v8.35l11.57 6.68v-8.35l-11.57-6.68z" />
          <path className="prefix__cls-9" d="m572.46 410.72 2.89 1.67v4l-2.89 1.67" />
          <path className="prefix__cls-18" d="m575.35 416.39 4.04 2.33v-4l-4.04-2.33v4z" />
          <path className="prefix__cls-39" d="m566.36 377.81 32.13 18.54 1.26.73 1.16-.67-33.28-19.34-1.27.74z" />
          <path
            className="prefix__cls-41"
            d="m560.89 401.6 18.5 10.68v.53l-18.5-10.73v-.48zm0-1.06 18.5 10.68v.53l-18.5-10.73v-.48zm0-1.06 18.5 10.68v.52l-18.5-10.72v-.48z"
          />
          <path className="prefix__cls-28" d="M561.93 411.98v-5.7l9.24 5.34v5.69l-9.24-5.33z" />
          <path className="prefix__cls-34" d="M576.31 416.94v-4l2.21 1.27v4.02l-2.21-1.29z" />
          <path className="prefix__cls-16" d="m560.89 411.38-1.81-1.05v-16.69l1.81 1.05v16.69z" />
          <path
            className="prefix__cls-28"
            transform="rotate(-60.01 574.46 392.508)"
            d="M565.8 378.14h17.35v28.74H565.8z"
          />
          <path className="prefix__cls-34" d="m578.85 385.61-12.2-7.04-4.04 7.04 12.2 7.03 4.04-7.03z" />
          <path className="prefix__cls-76" d="m563.29 385.42 3.54-6.17 11.34 6.54-3.54 6.17-11.34-6.54z" />
          <path className="prefix__cls-34" transform="rotate(-60.12 573.588 387.252)" d="M569.95 387h7.22v.5h-7.22z" />
          <path
            className="prefix__cls-34"
            transform="rotate(-60.13 570.683 385.62)"
            d="M567.11 385.37h7.22v.5h-7.22z"
          />
          <path
            className="prefix__cls-34"
            transform="rotate(-60.13 567.92 383.998)"
            d="M564.27 383.74h7.22v.5h-7.22z"
          />
          <path className="prefix__cls-34" d="m576.4 389.23-11.78-6.77.25-.43 11.78 6.77-.25.43z" />
          <path className="prefix__cls-39" d="m582.58 405.86 8.68-15.03v1.35l-8.68 15.03v-1.35z" />
          <path className="prefix__cls-38" d="m590.67 391.84 1.16-.71-24.2-14.06-1.27.74 24.31 14.03z" />
          <path
            className="prefix__cls-39"
            d="M418.24 154.49V139.6h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.82 0 .62.62 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M410.89 141.52a6.07 6.07 0 1 1 6.07 6.07 6.08 6.08 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M423 141.38a6.07 6.07 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.91z" />
          <path className="prefix__cls-31" d="m575.67 440.68-.8-.47v-21.57l.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m575.67 418.18-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path className="prefix__cls-16" d="m575.67 417.71-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m576.47 440.21-.8.47V418.4l.8-.23v22.04zM568 420.77c-.19.11-.19.28 0 .39l.12.07a.76.76 0 0 0 .69 0l1.26-.73-.8-.47z"
          />
          <path className="prefix__cls-30" transform="rotate(-.12 582.057 430.328)" d="M567.81 420.5h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M568 420.31c-.19.11-.19.28 0 .39l.12.07a.76.76 0 0 0 .69 0L570 420l-.8-.46z"
          />
          <path className="prefix__cls-31" d="m530.99 415.15-.8-.47v-21.57l.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m530.99 392.65-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path className="prefix__cls-16" d="m530.99 392.18-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m531.79 414.68-.8.47v-22.28l.8-.23v22.04zm-8.52-19.44c-.19.11-.19.28 0 .39l.12.07a.76.76 0 0 0 .69 0l1.26-.73-.8-.47z"
          />
          <path className="prefix__cls-30" transform="rotate(-.12 534.335 406.405)" d="M523.13 394.97h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M523.27 394.78c-.19.11-.19.28 0 .39l.12.07a.76.76 0 0 0 .69 0l1.26-.74-.8-.46z"
          />
          <path className="prefix__cls-31" d="m486.31 389.62-.8-.47v-21.57l.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m486.31 367.12-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path className="prefix__cls-16" d="m486.31 366.65-6.45 1.86.8.47 6.45-1.87-.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m487.11 389.15-.8.47v-22.28l.8-.23v22.04zm-8.52-19.44c-.19.11-.19.29 0 .39l.12.07a.76.76 0 0 0 .69 0l1.26-.73-.8-.46z"
          />
          <path className="prefix__cls-30" transform="rotate(-.12 491.394 377.712)" d="M478.45 369.44h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M478.59 369.25c-.19.11-.19.28 0 .39l.12.07a.76.76 0 0 0 .69 0l1.26-.73-.8-.47z"
          />
          <path className="prefix__cls-31" d="m441.63 364.09-.8-.47v-21.57l.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m441.63 341.59-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path className="prefix__cls-16" d="m441.63 341.12-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path
            className="prefix__cls-30"
            d="m442.43 363.62-.8.47v-22.28l.8-.23v22.04zm-8.52-19.44c-.19.11-.19.28 0 .4l.12.06a.76.76 0 0 0 .69 0l1.26-.73-.8-.46z"
          />
          <path className="prefix__cls-30" transform="rotate(-.12 443.672 353.789)" d="M433.77 343.91h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M433.91 343.72c-.19.11-.19.28 0 .39l.12.07a.76.76 0 0 0 .69 0l1.26-.73-.8-.47z"
          />
          <path
            className="prefix__cls-9"
            d="m477.51 390.92-6.77 3.92a1.05 1.05 0 0 0 0 2l16 9.21c4.78 2.77 14.08-3.78 10.25-5.92l-16-9.22a3.82 3.82 0 0 0-3.48.01z"
          />
          <path
            className="prefix__cls-34"
            d="M492.31 393.42a.53.53 0 0 0 .07.2c.14.26.44.58.55.55s.15-.16.18-.33a1 1 0 0 0 0-.25c0-.27-.11-.91-.49-1.08a.21.21 0 0 0-.23 0 .49.49 0 0 0-.11.18 1.86 1.86 0 0 0 .03.73z"
          />
          <path
            className="prefix__cls-35"
            d="M492.37 393.66c.14.26.44.58.55.55s.15-.16.18-.33a1 1 0 0 0 0-.25c0-.27-.11-.91-.49-1.08a.21.21 0 0 0-.23 0v.12c.27.11.34.52.32.83s-.18.32-.33.16z"
          />
          <path
            className="prefix__cls-36"
            d="M492.3 392.77c.1-.1.34-.1.54.17a1.88 1.88 0 0 1 .26.93 1 1 0 0 0 0-.25c0-.27-.11-.91-.49-1.08-.13-.07-.26.09-.31.23z"
          />
          <path className="prefix__cls-37" d="m472.1 395.18 2.63-1.52-1.46-.84-1.76 1.01.59 1.35z" />
          <path
            className="prefix__cls-23"
            d="m473.21 394.82-.38-.75.9-.52a1.08 1.08 0 0 1 1.08.1 3.71 3.71 0 0 1 1.61 3 1.32 1.32 0 0 1-.51 1.19l-.92.53-.4-.79a3.86 3.86 0 0 1-1.38-2.76z"
          />
          <path
            className="prefix__cls-24"
            d="M472.27 395.28a3.86 3.86 0 0 0 1.25 2.7 2.8 2.8 0 0 0 .35.25c.89.51 1.61 0 1.61-1.1a3.87 3.87 0 0 0-1-2.45 2.53 2.53 0 0 0-.61-.5c-.87-.51-1.6-.01-1.6 1.1z"
          />
          <path
            className="prefix__cls-25"
            d="M473.88 394.86c-.57-.32-1 0-1 .76a2.41 2.41 0 0 0 1 1.94c.56.33 1 0 1-.76a2.46 2.46 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M473.44 396a1.17 1.17 0 0 0 .44.93.24.24 0 0 0 .28 0 .5.5 0 0 0 .16-.42 1.16 1.16 0 0 0-.44-.93.36.36 0 0 0-.19-.05c-.15-.02-.25.16-.25.47z"
          />
          <path
            className="prefix__cls-27"
            d="M473.54 395.92a1.17 1.17 0 0 0 .43.93.28.28 0 0 0 .19 0 .5.5 0 0 0 .16-.42 1.16 1.16 0 0 0-.44-.93.36.36 0 0 0-.19-.05.54.54 0 0 0-.15.47z"
          />
          <path
            className="prefix__cls-25"
            d="M472.27 395.28a3.86 3.86 0 0 0 1.25 2.7 4.62 4.62 0 0 1-1-2c-.13-.65-.08-1.57.47-1.81s1.29.26 1.52.49a2.53 2.53 0 0 0-.61-.5c-.9-.49-1.63.01-1.63 1.12z"
          />
          <path className="prefix__cls-37" d="m483.8 401.94 2.63-1.52-1.46-.85-2.64 1.52 1.47.85z" />
          <path
            className="prefix__cls-23"
            d="m484.88 401.56-.38-.75.9-.52a1.07 1.07 0 0 1 1.09.09 3.74 3.74 0 0 1 1.61 3 1.32 1.32 0 0 1-.52 1.19l-.92.54-.4-.79a3.83 3.83 0 0 1-1.38-2.76z"
          />
          <path
            className="prefix__cls-24"
            d="M483.94 402a3.85 3.85 0 0 0 1.26 2.7 2.11 2.11 0 0 0 .35.26c.89.51 1.61 0 1.61-1.1a3.85 3.85 0 0 0-1-2.45 2.85 2.85 0 0 0-.61-.5c-.89-.5-1.61-.01-1.61 1.09z"
          />
          <path
            className="prefix__cls-25"
            d="M485.55 401.6c-.56-.33-1 0-1 .76a2.44 2.44 0 0 0 1 1.94c.57.33 1 0 1-.76a2.42 2.42 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M485.11 402.7a1.14 1.14 0 0 0 .44.92.24.24 0 0 0 .28 0 .51.51 0 0 0 .16-.43 1.17 1.17 0 0 0-.44-.93.31.31 0 0 0-.18 0c-.15-.01-.26.17-.26.44z"
          />
          <path
            className="prefix__cls-27"
            d="M485.21 402.66a1.14 1.14 0 0 0 .44.93.3.3 0 0 0 .18 0 .51.51 0 0 0 .16-.43 1.17 1.17 0 0 0-.44-.93.31.31 0 0 0-.18 0 .51.51 0 0 0-.16.43z"
          />
          <path
            className="prefix__cls-25"
            d="M483.94 402a3.85 3.85 0 0 0 1.26 2.7 4.58 4.58 0 0 1-1-2c-.13-.65-.08-1.57.47-1.81s1.29.26 1.52.48a2.85 2.85 0 0 0-.61-.5c-.92-.46-1.64.03-1.64 1.13z"
          />
          <path
            className="prefix__cls-38"
            d="M470.49 392.78v.22a2.21 2.21 0 0 0 1.09 1.9l.52.29c0-1.3.85-1.87 1.9-1.26a4.38 4.38 0 0 1 1.88 3.15v.31l7.9 4.56a2.17 2.17 0 0 1 0-.26 1.16 1.16 0 0 1 1.89-1l.18.12a4 4 0 0 1 1.16 1.35 4.37 4.37 0 0 1 .45 1.15 3.89 3.89 0 0 1 .09.47.75.75 0 0 0 .42.58 6.7 6.7 0 0 0 6.33-.21l1.13-.66a3.85 3.85 0 0 0 1.94-3.34v-.54a5.85 5.85 0 0 0 0-.59l-.06-.35a4.37 4.37 0 0 0-.59-1.43 2.11 2.11 0 0 0-.18-.27 4.65 4.65 0 0 0-1-1l-2.82-2-2.93-3a35.87 35.87 0 0 0-5.12-3.41 9.56 9.56 0 0 0-4.42-1.21 7.36 7.36 0 0 0-1.34.09h-.15a4.08 4.08 0 0 0-1.25.55c-.36.22-5.77 3.34-5.77 3.34l-.22.14a1.64 1.64 0 0 0-.23.21 3.6 3.6 0 0 0-.51.8 3.36 3.36 0 0 0-.29 1.3z"
          />
          <path
            className="prefix__cls-39"
            d="M497.4 399.59a5.85 5.85 0 0 0 0-.59l-.06-.35a4.37 4.37 0 0 0-.59-1.43 2.11 2.11 0 0 0-.18-.27 5 5 0 0 0-.63-.68c.74.82.75 2.1-1.33 3.51a5.57 5.57 0 0 1-4.64 1l.53 4.29a6.72 6.72 0 0 0 3.87-.88l1.13-.66a3.85 3.85 0 0 0 1.94-3.34z"
          />
          <path
            className="prefix__cls-28"
            d="M491.56 405c.38-1.48-.45-3.84-1.55-4.31a10.18 10.18 0 0 1-4.07-1.87l-.87-.48-1.71-3.74.67-.16s0-.32-.53-.68-5.38-3.28-6.15-3.62-1.3-.71-2-.43a12.83 12.83 0 0 0-4 .92 3.6 3.6 0 0 0-.51.8 3.36 3.36 0 0 0-.29 1.36v.21a2.21 2.21 0 0 0 1.09 1.9l.52.29c0-1.3.85-1.87 1.9-1.26a4.38 4.38 0 0 1 1.88 3.15v.31l7.9 4.56a2.26 2.26 0 0 1 0-.26 1.16 1.16 0 0 1 1.89-1l.18.12a4 4 0 0 1 1.16 1.35 4.5 4.5 0 0 1 .45 1.15 3.89 3.89 0 0 1 .09.47.78.78 0 0 0 .42.59 6.76 6.76 0 0 0 3.53.63z"
          />
          <path
            className="prefix__cls-38"
            d="M494.18 395.57a15.65 15.65 0 0 0-1.57-1.25l-5.89 3.73a22.59 22.59 0 0 0 3.36-1.6 12.87 12.87 0 0 0 2.53-1.88c.21-.08 1.57 1 1.57 1z"
          />
          <path
            className="prefix__cls-39"
            d="M483.3 398a2.91 2.91 0 0 0 .57.31c.26.07.21-.25-.19-1.61s-.6-2.11-1.2-2.53-5-2.94-5.56-3.29a2.07 2.07 0 0 0-1.9-.26c-.63.26-1 .49-1 1s-.15.84.88 1.43z"
          />
          <path
            className="prefix__cls-34"
            d="M488.33 402.36c.54.7 1.21 1.14 2.89 1a9.17 9.17 0 0 0 4-1.54 4.19 4.19 0 0 0 1.56-1.46 3.78 3.78 0 0 0 .55-1.33l-.06-.35a4.37 4.37 0 0 0-.59-1.43 2.11 2.11 0 0 0-.18-.27 3.56 3.56 0 0 1 .06.82 15.48 15.48 0 0 0-.09 1.68c0 .49-.29 1.06-1.59 1.82-1.54.91-2.13.77-2.73.59a4.94 4.94 0 0 0-1-.17 9.35 9.35 0 0 1-1.13-.13c-.64-.16-1-.6-1.47-.54-.71.04-.55.89-.22 1.31z"
          />
          <path
            className="prefix__cls-35"
            d="M491.16 401.68a7 7 0 0 1 1.33.37c.28.1.54.19 1.4-.11a7.75 7.75 0 0 0 2.26-1.4 1 1 0 0 0 .35-1.1c0 .49-.29 1.06-1.59 1.82-1.54.91-2.13.77-2.73.59a4.94 4.94 0 0 0-1-.17z"
          />
          <path
            className="prefix__cls-40"
            d="m483.36 394.59 1.71 3.74c.34.59 3.93-1.23 6.08-2.75 1-.72 1.73-1.38 1.57-1.66a21.51 21.51 0 0 0-2.93-3l-.34.33c-.28.25-.57.5-.89.74a20.7 20.7 0 0 1-5.2 2.6z"
          />
          <path
            className="prefix__cls-41"
            d="m474.73 393 2.49 1.44.49.28 2 1.14.47.28 2.59 1.5c.59.34 1 .57.88.17-.07-.24-.36-1.34-.6-2.18a2.52 2.52 0 0 0-.78-1.26l-.17-.14-.24-.15-2-1.16h-.06l-.5-.29-1.12-.64-.37-.22-1.17-.67a2.5 2.5 0 0 0-.48-.22 1.91 1.91 0 0 0-1.57.39c-.38.16-.3 1.47.14 1.73z"
          />
          <path
            className="prefix__cls-35"
            d="m480.18 396.13 2.59 1.5c.59.34 1 .57.88.17-.07-.24-.36-1.34-.6-2.18a2.52 2.52 0 0 0-.78-1.26 4.19 4.19 0 0 1 .8 1.85c.34 1.26.57 1.75-.82 1s-1.99-1.04-2.07-1.08zm8.44 5.05c.49 0 .79.6 1.76.67s1.49.1 1.78.34.17.56-.32.76a3.64 3.64 0 0 1-2.67-.08c-.84-.49-1.37-1.72-.55-1.69zm1.17 3.15a.57.57 0 0 0 .42.17 4.35 4.35 0 0 0 .53 0c.43 0 .84 0 .94-.19s.38-.56.17-.59h-.2a5 5 0 0 1-.83.05 6.42 6.42 0 0 1-.83 0c-.36-.03-.3.41-.2.56z"
          />
          <path
            className="prefix__cls-37"
            d="M497 399.57a1.89 1.89 0 0 0 .34-.92 4.37 4.37 0 0 0-.59-1.43 5.64 5.64 0 0 1 0 1.52c-.13.47.12.88.25.83z"
          />
          <path
            className="prefix__cls-34"
            d="M493.45 403.37a.79.79 0 0 0 .54.32 4.54 4.54 0 0 0 1.48-.67 4.3 4.3 0 0 0 .77-.6.9.9 0 0 0 .21-.33 1.89 1.89 0 0 0 .05-.68c0-.12-.12-.06-.18 0l-.41.33-.68.47a9.73 9.73 0 0 1-1.58.86c-.25.1-.33.17-.2.3zm-10.7-5.37c.12.58.76.7 1.24.69a1.76 1.76 0 0 0 .53-.09c.18-.11.1-.33 0-.46a2.56 2.56 0 0 0-1.4-.67c-.28.03-.46.16-.37.53z"
          />
          <path
            className="prefix__cls-35"
            d="M482.75 398c.12.58.76.7 1.24.69a1.76 1.76 0 0 0 .53-.09c.18-.11.1-.33 0-.46.09.18-.4.28-.84.13s-.77-.5-.56-.8c-.28.03-.46.16-.37.53z"
          />
          <path
            className="prefix__cls-36"
            d="M482.75 398c.12.58.76.7 1.24.69a1.15 1.15 0 0 1-1-.59c-.15-.3 0-.59.13-.63-.28.03-.46.16-.37.53z"
          />
          <path
            className="prefix__cls-41"
            d="M473.71 390a3.36 3.36 0 0 0 1.55-.56l4.36-2.51c.79-.46.86-.54.46-.56a6.8 6.8 0 0 0-.76 0 3 3 0 0 0-1.24.39l-3.85 2.23c-2.23 1.34-1.44 1.19-.52 1.01z"
          />
          <path
            className="prefix__cls-42"
            d="M470.49 392.69c.24.21.41-.31.44-.72s0-.47-.15-.55-.3.33-.36.55a1.37 1.37 0 0 0-.06.32.49.49 0 0 0 .13.4z"
          />
          <path
            className="prefix__cls-41"
            d="M488.43 401.77a1.87 1.87 0 0 0 .49.67 1.37 1.37 0 0 0 1.46.43.4.4 0 0 0 .18-.6 1.42 1.42 0 0 0-.58-.27 3.37 3.37 0 0 1-.8-.36 2.32 2.32 0 0 0-.42-.21c-.34-.11-.42.09-.33.34zm2.76 1.06c.24 0 .67 0 .8-.21s0-.22-.12-.31a.67.67 0 0 0-.36-.12.78.78 0 0 0-.46.09.53.53 0 0 0-.14.12c-.21.22.01.38.28.43zm5.6-4.13a.78.78 0 0 0 0 .23c.05.12.14.18.29 0s.07-.94-.15-.9l-.08.05a1.32 1.32 0 0 0-.06.62z"
          />
          <path
            className="prefix__cls-34"
            d="M492.8 401.69c.05.06.15 0 .39 0a8.61 8.61 0 0 0 1.71-.75l.25-.16a4.71 4.71 0 0 0 1-.82c.1-.17 0-.19-.1-.24a.56.56 0 0 0-.53 0l-.72.39a14 14 0 0 0-1.7 1c-.21.23-.34.53-.3.58z"
          />
          <path
            className="prefix__cls-39"
            d="M478.53 395.35s-.23.09-.2.71.2 2.16.2 2.16-.37-1.67-.44-2.19a1.13 1.13 0 0 1 .22-.85z"
          />
          <path
            className="prefix__cls-38"
            d="M486.09 400.43a3.31 3.31 0 0 1 1.65 2.42 2.38 2.38 0 0 0-1.65-2.42zM474.78 394a3.31 3.31 0 0 1 1.4 2.57 2.4 2.4 0 0 0-1.4-2.57zm7.12 3.46-3.37-1.94s-.11.16-.09.25zm-3.78-2.17-3-1.8 2.94 2s-.06-.14.06-.2zm-1.34-7.79s-3.32 1.9-3.66 2.11-.92.64-.78.68 1.27 0 1.27 0-.88.1-1.25.17a2.08 2.08 0 0 0-1.22.48s.07-.25.61-.59c.79-.5 5.03-2.85 5.03-2.85zm12.09 3.8c-1.13 1.13-4.6 2.74-5.51 2.68-1.08-.06-3.66-1.62-3.66-1.62a21.88 21.88 0 0 0 3.44 1.89c1.03.25 5.09-2.06 5.73-2.95zm.92 13.03a.57.57 0 0 0 .42.17c-.33-.06-.44-.27-.42-.45s.1-.16.59-.17a5.81 5.81 0 0 0 1.27-.14 5 5 0 0 1-.83.05 6.42 6.42 0 0 1-.83 0c-.36-.05-.3.39-.2.54z"
          />
          <path
            className="prefix__cls-43"
            d="M494.57 399.77a6.3 6.3 0 0 1-3.9 1.15c-2-.13-4.73-2.11-4.73-2.11a12.44 12.44 0 0 0 4.58 1.91 6.92 6.92 0 0 0 4.05-.95z"
          />
          <path
            className="prefix__cls-40"
            d="M488.77 401.68a1.27 1.27 0 0 0 .87.91c.7.26 1-.12.92-.32a.61.61 0 0 0-.26-.16l-.32-.11a3.33 3.33 0 0 1-.65-.28l-.15-.08c-.27-.15-.39-.12-.41.04z"
          />
          <path
            className="prefix__cls-16"
            d="M489.18 401.91a1.09 1.09 0 0 0 .9.53c.42 0 .34-.29.18-.37l-.32-.11a3.33 3.33 0 0 1-.65-.28c-.19-.06-.24.01-.11.23z"
          />
          <path
            className="prefix__cls-40"
            d="M491.58 402.68c.35 0 .41-.24.29-.37a.41.41 0 0 0-.11-.07 1 1 0 0 0-.25-.05h-.23a.63.63 0 0 0-.23.08c-.3.21.19.43.53.41z"
          />
          <path
            className="prefix__cls-16"
            d="M491.17 402.33a1 1 0 0 0 .53.12c.21 0 .16-.14.05-.21a1 1 0 0 0-.25-.05h-.23c-.08.03-.14.09-.1.14z"
          />
          <path
            className="prefix__cls-40"
            d="M496.79 398.7a.78.78 0 0 0 0 .23c.09 0 .2-.1.26-.32s-.11-.58-.2-.56a.48.48 0 0 0-.08.23 1.62 1.62 0 0 0 .02.42z"
          />
          <path
            className="prefix__cls-16"
            d="M496.79 398.7c.1.23.24-.1.22-.26s-.11-.28-.19-.16a1.62 1.62 0 0 0-.03.42z"
          />
          <path
            className="prefix__cls-35"
            d="M492.8 401.69c.05.06.15 0 .39 0a8.61 8.61 0 0 0 1.71-.75l.25-.16a10.41 10.41 0 0 1-1.86.8c-.36.07-.39 0-.28-.17a1.56 1.56 0 0 1 .47-.45c.18-.11.89-.59 1.25-.8a14 14 0 0 0-1.7 1c-.14.18-.27.48-.23.53zm.65 1.68a.79.79 0 0 0 .54.32 4.54 4.54 0 0 0 1.48-.67 4.3 4.3 0 0 0 .77-.6 7.32 7.32 0 0 1-2.06 1.15.52.52 0 0 1-.59-.2c-.15-.14.05-.15.59-.45a11.44 11.44 0 0 0 1.72-1.19l-.68.47a9.73 9.73 0 0 1-1.58.86c-.24.11-.32.18-.19.31zm-10.09-8.78 1.71 3.74c.34.59 3.93-1.23 6.08-2.75a34.41 34.41 0 0 1-4.58 2.3c-.86.32-1.25.44-1.52 0s-1.37-2.88-1.69-3.29z"
          />
          <path
            className="prefix__cls-44"
            d="M492.05 393.75a6.94 6.94 0 0 0-.89-1.1 6.76 6.76 0 0 0-1.66-1.44h-.05c-.25.23-.51.44-.79.66 0 0 3.41 1.96 3.39 1.88z"
          />
          <path
            className="prefix__cls-35"
            d="m477.63 394.68 2.07 1.18a3 3 0 0 1-.87-.84 6.37 6.37 0 0 1 0-2c0-.48.21-.52.47-.41l-1.12-.64a.79.79 0 0 1 .27.85c0 .38-.06 1.18-.13 1.68s-.43.3-.6.24zm-2.9-1.68 2.49 1.44c-.73-.46-2.23-1.39-2.44-1.56s-.31-.77-.29-1.15.24-.48.62-.67a1.76 1.76 0 0 1 1-.22 1.91 1.91 0 0 0-1.57.39c-.33.2-.25 1.51.19 1.77z"
          />
          <path
            className="prefix__cls-39"
            d="M483.5 393.75s-4.74-3.11-6.28-3.8-1.91-.25-1.91-.25c1-.21 2.57.76 4.18 1.72z"
          />
          <path
            className="prefix__cls-28"
            d="M488.77 390.86s-2.42-1.36-4-2.32-3.54-1.87-4.5-1.67c0 0 .62-.41 2.47.38 1.53.66 6.03 3.61 6.03 3.61z"
          />
          <path
            className="prefix__cls-45"
            d="M470.49 392.69c.24.21.41-.31.44-.72s0-.47-.15-.55a2.08 2.08 0 0 1-.1 1c-.14.2-.31 0-.32-.15a.49.49 0 0 0 .13.42z"
          />
          <path
            className="prefix__cls-46"
            d="M470.62 391.91v.06s.06 0 .07-.05a.36.36 0 0 0 0-.15.36.36 0 0 0-.08-.19c-.05 0-.08.05-.08.09a1 1 0 0 0 .09.24z"
          />
          <path className="prefix__cls-47" d="M470.49 391.94v.19c0 .04 0 0 0 0v-.06a.21.21 0 0 1 0-.13z" />
          <path className="prefix__cls-31" d="m412.32 163.43-.8-.47v-21.57l.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m412.32 140.93-6.45 1.86.79.46 6.45-1.86-.79-.46z" />
          <path className="prefix__cls-16" d="m412.32 140.46-6.45 1.87.79.46 6.45-1.87-.79-.46z" />
          <path
            className="prefix__cls-30"
            d="m413.11 162.96-.79.47v-22.28l.79-.23v22.04zm-8.51-19.44a.21.21 0 0 0 0 .4l.12.06a.74.74 0 0 0 .68 0l1.26-.73-.79-.46z"
          />
          <path className="prefix__cls-30" d="M404.46 143.26h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M404.6 143.06c-.19.11-.19.29 0 .39l.12.07a.74.74 0 0 0 .68 0l1.26-.73-.79-.46z"
          />
          <path className="prefix__cls-31" d="m367.64 137.9-.8-.47v-21.57l.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m367.64 115.4-6.45 1.86.79.46 6.45-1.86-.79-.46z" />
          <path className="prefix__cls-16" d="m367.64 114.94-6.45 1.86.79.46 6.45-1.87-.79-.45z" />
          <path
            className="prefix__cls-30"
            d="m368.43 137.43-.79.47v-22.28l.79-.23v22.04zM359.92 118a.21.21 0 0 0 0 .4l.12.06a.74.74 0 0 0 .68 0l1.26-.73-.79-.46z"
          />
          <path className="prefix__cls-30" transform="rotate(-.06 372.358 124.336)" d="M359.78 117.73h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M359.92 117.53a.21.21 0 0 0 0 .4l.12.06a.74.74 0 0 0 .68 0l1.26-.73-.79-.46z"
          />
          <path className="prefix__cls-31" d="m322.96 112.37-.8-.47V90.33l.8-.24v22.28z" />
          <path className="prefix__cls-30" d="m322.96 89.87-6.45 1.86.8.46 6.44-1.86-.79-.46z" />
          <path className="prefix__cls-16" d="m322.96 89.41-6.45 1.86.8.46 6.44-1.87-.79-.45z" />
          <path
            className="prefix__cls-30"
            d="m323.75 111.9-.79.47V90.09l.79-.23v22.04zm-8.51-19.44a.21.21 0 0 0 0 .4l.12.06a.76.76 0 0 0 .69 0l1.26-.73-.8-.46z"
          />
          <path className="prefix__cls-30" d="M315.1 92.2h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M315.24 92a.21.21 0 0 0 0 .4l.12.06a.76.76 0 0 0 .69 0l1.26-.73-.8-.46z"
          />
          <path className="prefix__cls-31" d="m278.28 86.84-.8-.47V64.81l.8-.25v22.28z" />
          <path className="prefix__cls-30" d="m278.28 64.34-6.45 1.86.8.46 6.45-1.86-.8-.46z" />
          <path className="prefix__cls-16" d="m278.28 63.88-6.45 1.86.8.46 6.45-1.87-.8-.45z" />
          <path
            className="prefix__cls-30"
            d="m279.08 86.37-.8.47V64.56l.8-.23v22.04zm-8.52-19.44a.21.21 0 0 0 0 .4l.12.07a.8.8 0 0 0 .69 0l1.26-.73-.8-.46z"
          />
          <path className="prefix__cls-30" transform="rotate(-.06 276.895 66.99)" d="M270.42 66.67h.49v.47h-.49z" />
          <path
            className="prefix__cls-16"
            d="M270.56 66.47a.21.21 0 0 0 0 .4l.12.06a.76.76 0 0 0 .69 0l1.26-.73-.8-.46z"
          />
          <path
            className="prefix__cls-39"
            d="M137.91 329.5v-14.89h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M130.56 316.52a6.07 6.07 0 1 1 6.07 6.08 6.07 6.07 0 0 1-6.07-6.08z" />
          <path
            className="prefix__cls-70"
            d="M142.69 316.39a6.06 6.06 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M150.1 336.49V321.6h-2.57v14.89a.63.63 0 0 0 .38.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M142.74 323.52a6.08 6.08 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M154.88 323.39a6.07 6.07 0 0 0-6.07-5.94h-.42a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M162.28 343.48v-14.89h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.82 0 .62.62 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M154.93 330.51a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M167.07 330.38a6.07 6.07 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M251.77 398.38v-14.89h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M244.42 385.41a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M256.55 385.28a6.07 6.07 0 0 0-6.06-5.95h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M296.44 424.18v-14.89h-2.57v14.89a.63.63 0 0 0 .38.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M289.08 411.2a6.08 6.08 0 1 1 6.08 6.08 6.08 6.08 0 0 1-6.08-6.08z" />
          <path
            className="prefix__cls-70"
            d="M301.22 411.07a6.07 6.07 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M263.91 319.61v-14.89h-2.56v14.89a.64.64 0 0 0 .37.52 2 2 0 0 0 1.82 0 .64.64 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M256.56 306.63a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M268.7 306.5a6.08 6.08 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.92z" />
          <path
            className="prefix__cls-39"
            d="M243.94 308v-14.87h-2.56V308a.62.62 0 0 0 .37.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M236.59 295.05a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M248.72 294.92a6.07 6.07 0 0 0-6.06-5.95h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M519.07 303.33v-14.89h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M511.72 290.36a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M523.85 290.22a6.06 6.06 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M499.1 291.74v-14.89h-2.57v14.89a.63.63 0 0 0 .38.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M491.74 278.77a6.08 6.08 0 1 1 6.08 6.07 6.08 6.08 0 0 1-6.08-6.07z" />
          <path
            className="prefix__cls-70"
            d="M503.88 278.64a6.07 6.07 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M649.56 226.83v-14.89H647v14.89a.63.63 0 0 0 .38.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M642.2 213.86a6.08 6.08 0 1 1 6.08 6.07 6.08 6.08 0 0 1-6.08-6.07z" />
          <path
            className="prefix__cls-70"
            d="M654.34 213.73a6.07 6.07 0 0 0-6.06-5.95h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M674.1 213.11v-14.89h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M666.74 200.13a6.08 6.08 0 1 1 6.08 6.08 6.08 6.08 0 0 1-6.08-6.08z" />
          <path className="prefix__cls-70" d="M678.88 200a6.07 6.07 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z" />
          <path
            className="prefix__cls-39"
            d="M629.58 215.24v-14.89H627v14.89a.66.66 0 0 0 .38.53 2.06 2.06 0 0 0 1.81 0 .65.65 0 0 0 .39-.53z"
          />
          <path className="prefix__cls-69" d="M622.23 202.27a6.08 6.08 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M634.37 202.14a6.07 6.07 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M348.94 185v-14.92h-2.56V185a.65.65 0 0 0 .37.53 2 2 0 0 0 1.81 0 .66.66 0 0 0 .38-.53z"
          />
          <path className="prefix__cls-69" d="M341.59 172a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M353.72 171.86a6.06 6.06 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M328 173v-14.88h-2.56V173a.66.66 0 0 0 .38.53 2 2 0 0 0 1.81 0 .65.65 0 0 0 .37-.53z"
          />
          <path className="prefix__cls-69" d="M320.63 160a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M332.77 159.91a6.07 6.07 0 0 0-6.07-5.91h-.43a4.68 4.68 0 1 0 6.5 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M307 161.06v-14.89h-2.56v14.89a.65.65 0 0 0 .37.53 2 2 0 0 0 1.81 0 .66.66 0 0 0 .38-.53z"
          />
          <path className="prefix__cls-69" d="M299.68 148.09a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M311.81 148a6.06 6.06 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z" />
          <path
            className="prefix__cls-39"
            d="M286.07 149.11v-14.89h-2.56v14.89a.66.66 0 0 0 .38.53 2.06 2.06 0 0 0 1.81 0 .65.65 0 0 0 .37-.53z"
          />
          <path className="prefix__cls-69" d="M278.72 136.14a6.08 6.08 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M290.86 136a6.07 6.07 0 0 0-6.07-5.94h-.42a4.68 4.68 0 1 0 6.49 5.92z" />
          <path
            className="prefix__cls-39"
            d="M265.12 137.16v-14.89h-2.56v14.89a.65.65 0 0 0 .37.53 2.06 2.06 0 0 0 1.81 0 .64.64 0 0 0 .38-.53z"
          />
          <path className="prefix__cls-69" d="M257.77 124.19a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M269.9 124.06a6.06 6.06 0 0 0-6.06-5.94h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M244.16 125.21v-14.89h-2.56v14.89a.63.63 0 0 0 .38.52 2 2 0 0 0 1.81 0 .6.6 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M236.81 112.24a6.08 6.08 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M249 112.11a6.07 6.07 0 0 0-6.07-5.94h-.42a4.68 4.68 0 1 0 6.49 5.92z" />
          <path
            className="prefix__cls-39"
            d="M223.21 113.26V98.37h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.82 0 .62.62 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M215.86 100.29a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M228 100.16a6.07 6.07 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.92z" />
          <path
            className="prefix__cls-39"
            d="M309.14 68.74V53.85h-2.56v14.89a.66.66 0 0 0 .38.52 2 2 0 0 0 1.81 0 .64.64 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M301.79 55.76a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path className="prefix__cls-70" d="M313.93 55.63a6.07 6.07 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.92z" />
          <path
            className="prefix__cls-39"
            d="M448.63 359.29V344.4h-2.56v14.89a.63.63 0 0 0 .38.52 2 2 0 0 0 1.81 0 .62.62 0 0 0 .37-.52z"
          />
          <path className="prefix__cls-69" d="M441.28 346.32a6.07 6.07 0 1 1 6.07 6.07 6.08 6.08 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M453.42 346.19a6.07 6.07 0 0 0-6.07-5.95h-.43a4.68 4.68 0 1 0 6.5 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M389.76 325.68v-14.89h-2.56v14.89a.62.62 0 0 0 .37.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M382.41 312.71a6.07 6.07 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M394.54 312.58a6.07 6.07 0 0 0-6.06-5.95h-.43a4.67 4.67 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M494.65 386.65v-14.89h-2.56v14.89a.66.66 0 0 0 .38.53 2 2 0 0 0 1.81 0 .65.65 0 0 0 .37-.53z"
          />
          <path className="prefix__cls-69" d="M487.3 373.68a6.08 6.08 0 1 1 6.07 6.07 6.07 6.07 0 0 1-6.07-6.07z" />
          <path
            className="prefix__cls-70"
            d="M499.44 373.55a6.07 6.07 0 0 0-6.07-5.94h-.43a4.68 4.68 0 1 0 6.5 5.92z"
          />
          <path
            className="prefix__cls-39"
            d="M540.68 414v-14.87h-2.57V414a.63.63 0 0 0 .38.52 2 2 0 0 0 1.81 0 .63.63 0 0 0 .38-.52z"
          />
          <path className="prefix__cls-69" d="M533.32 401.05a6.08 6.08 0 1 1 6.08 6.07 6.08 6.08 0 0 1-6.08-6.07z" />
          <path
            className="prefix__cls-70"
            d="M545.46 400.92a6.07 6.07 0 0 0-6.06-5.92h-.43a4.68 4.68 0 1 0 6.49 5.92z"
          />
          <path
            className="prefix__cls-77"
            d="M310.24 89.68c.33-.2.33-.51 0-.7l-12.88-7.43a1.27 1.27 0 0 0-1.2 0L292 83.92l.57.33 1.33-.77 13 7.48-1.09.63.6.3z"
          />
          <path className="prefix__cls-77" d="m290.07 84.58 2.82-1.63 12.39 7.15-2.82 1.63-12.39-7.15z" />
          <path className="prefix__cls-78" d="M292.61 70.26v13.99l-.57-.33V69.94l.57.32z" />
          <path className="prefix__cls-77" d="m292.08 72.39.42-.24v.32l-.42.25v-.33z" />
          <path className="prefix__cls-79" d="m292.5 72.15-.31-.18-.11.06v.36l.42-.24z" />
          <path className="prefix__cls-80" d="M292.61 70.26v13.99l.28-.17V70.1l-.28.16z" />
          <path className="prefix__cls-79" d="m292.89 70.1-.56-.33-.29.17.57.32.28-.16z" />
          <path className="prefix__cls-31" d="M288.81 83.19v-.32l12.39 7.15v.33l-12.39-7.16z" />
          <path fill="#d8e9ef" d="m288.81 82.87 2.81-1.63 12.39 7.15-2.81 1.63-12.39-7.15z" />
          <path className="prefix__cls-30" d="m304.02 88.72-.01-.33-2.81 1.63v.33l2.82-1.63z" />
          <path
            d="m291.62 84.49 2.82-1.62.28.16-2.82 1.63-.28-.17zm3.1 1.79 2.82-1.62.28.16-2.82 1.62-.28-.16zm3.38 1.95 2.82-1.62.28.16-2.82 1.62-.28-.16z"
            style={{
              fill: "#89b4d3",
            }}
          />
          <path
            className="prefix__cls-83"
            d="m306.27 77.34-13.51-7.8c-.33-.2-1.22 0-2.27.65l-1.54.88c-1.32.77-2.4 1.83-2.4 2.37v.32l.28-.16 13.24 7.64z"
          />
          <path className="prefix__cls-78" d="M306.13 78.07v13.98l-.57-.32V77.75l.57.32z" />
          <path className="prefix__cls-77" d="m305.6 80.2.42-.24v.32l-.42.25v-.33z" />
          <path className="prefix__cls-79" d="m306.02 79.96-.32-.18-.1.06v.36l.42-.24z" />
          <path className="prefix__cls-77" d="m305.6 89.43.42-.24v.33l-.42.24v-.33z" />
          <path className="prefix__cls-79" d="m306.02 89.19-.32-.18-.1.06v.36l.42-.24z" />
          <path className="prefix__cls-80" d="M306.13 78.07v13.98l.28-.16V77.91l-.28.16z" />
          <path className="prefix__cls-79" d="m306.41 77.91-.56-.33-.29.17.57.32.28-.16z" />
          <path className="prefix__cls-84" d="m300.07 93.6-.56-.33V82.22l.56.32V93.6z" />
          <path className="prefix__cls-83" d="m299.51 82.22 5.63-3.25.56.32-5.63 3.25-.56-.32z" />
          <path className="prefix__cls-80" d="M305.7 79.29v11.06l-5.63 3.25V82.54l5.63-3.25z" />
          <path fill="url(#prefix__Degradado_sin_nombre_586)" d="m300.35 93.11 5.07-2.93v-10.4l-5.07 2.92v10.41z" />
          <path className="prefix__cls-78" d="m305.42 90.18-.28-.16V79.94l.28-.16v10.4z" />
          <path className="prefix__cls-83" d="m305.42 90.18-.28-.16-4.79 2.77v.32l5.07-2.93z" />
          <path
            className="prefix__cls-80"
            d="M306.41 77.91v-.33c0-.54-1.08-.35-2.4.41l-1.54.89c-1.32.77-2.4 1.82-2.4 2.36v.33z"
          />
          <path className="prefix__cls-84" d="M300.07 81.57v-.33l-13.52-7.8v.32l13.52 7.81z" />
          <path
            className="prefix__cls-9"
            d="M524.76 128.09 514.52 134l19 10.94c4.71-1.21 8-3.24 10.25-5.92zm-8.68 4.3 1.76-.81a7.14 7.14 0 0 0-.17-.91c-.06 0-1.13-.35-1.13-.35l-.64.89z"
          />
          <path className="prefix__cls-19" d="M540.59 128v2a.33.33 0 0 0 .23.3 12.7 12.7 0 0 0-.11-2.19z" />
          <path className="prefix__cls-20" d="M540.71 128v1.9c0 .28.17.42.41.27l.19-.11a1 1 0 0 0 .45-.77v-1.89z" />
          <path className="prefix__cls-9" d="m541.76 127.43-.13-.08-1.04.61.12.07 1.05-.6z" />
          <path className="prefix__cls-21" d="M541.23 128.63v1.87a.43.43 0 0 1-.2.37l-1 .6" />
          <path className="prefix__cls-22" d="m528.15 139.36 8.35-4.82v-12.06l-8.35 4.82v12.06z" />
          <path
            className="prefix__cls-9"
            d="m527.5 139 1.76-.81a7.14 7.14 0 0 0-.17-.91c-.06 0-1.12-.35-1.12-.35l-.65.89z"
          />
          <path className="prefix__cls-17" d="m536.5 122.48-13.57-7.84-8.36 4.82 13.58 7.84 8.35-4.82z" />
          <path
            className="prefix__cls-23"
            d="m517 132.05-.37-.75.9-.52a1.08 1.08 0 0 1 1.08.1 3.71 3.71 0 0 1 1.61 3 1.32 1.32 0 0 1-.51 1.19l-.92.53-.4-.79a3.87 3.87 0 0 1-1.39-2.76z"
          />
          <path
            className="prefix__cls-24"
            d="M516.11 132.52a3.81 3.81 0 0 0 1.25 2.69 2.9 2.9 0 0 0 .36.25c.88.51 1.6 0 1.6-1.1a3.91 3.91 0 0 0-1-2.45 2.32 2.32 0 0 0-.6-.5c-.89-.5-1.61-.01-1.61 1.11z"
          />
          <path
            className="prefix__cls-25"
            d="M517.72 132.09c-.57-.32-1 0-1 .76a2.41 2.41 0 0 0 1 1.94c.56.33 1 0 1-.75a2.46 2.46 0 0 0-1-1.95z"
          />
          <path
            className="prefix__cls-26"
            d="M517.28 133.19a1.14 1.14 0 0 0 .44.93.24.24 0 0 0 .28 0 .5.5 0 0 0 .15-.42 1.15 1.15 0 0 0-.43-.93.36.36 0 0 0-.19-.05c-.15.03-.25.2-.25.47z"
          />
          <path
            className="prefix__cls-27"
            d="M517.37 133.15a1.16 1.16 0 0 0 .44.93.28.28 0 0 0 .19 0 .5.5 0 0 0 .15-.42 1.15 1.15 0 0 0-.43-.93.36.36 0 0 0-.19-.05.51.51 0 0 0-.16.47z"
          />
          <path
            className="prefix__cls-25"
            d="M516.11 132.52a3.81 3.81 0 0 0 1.25 2.69 4.51 4.51 0 0 1-1-2c-.14-.64-.09-1.57.47-1.8s1.28.25 1.51.48a2.32 2.32 0 0 0-.6-.5c-.91-.48-1.63.01-1.63 1.13z"
          />
          <path
            className="prefix__cls-23"
            d="m528.47 138.79-.38-.76.9-.52a1.09 1.09 0 0 1 1.09.1 3.72 3.72 0 0 1 1.61 2.95 1.3 1.3 0 0 1-.52 1.19l-.92.53-.4-.79a3.83 3.83 0 0 1-1.38-2.7z"
          />
          <path
            className="prefix__cls-24"
            d="M527.53 139.25a3.87 3.87 0 0 0 1.26 2.7 2 2 0 0 0 .35.25c.89.52 1.61 0 1.61-1.1a3.89 3.89 0 0 0-1-2.44 2.58 2.58 0 0 0-.61-.5c-.89-.52-1.61-.03-1.61 1.09z"
          />
          <path
            className="prefix__cls-25"
            d="M529.14 138.83c-.56-.33-1 0-1 .76a2.46 2.46 0 0 0 1 1.94c.57.32 1 0 1-.76a2.41 2.41 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M528.7 139.92a1.16 1.16 0 0 0 .44.93.26.26 0 0 0 .28 0 .51.51 0 0 0 .16-.43 1.14 1.14 0 0 0-.44-.93.25.25 0 0 0-.18 0c-.15-.01-.26.16-.26.43z"
          />
          <path
            className="prefix__cls-27"
            d="M528.8 139.88a1.16 1.16 0 0 0 .44.93.33.33 0 0 0 .18.05.51.51 0 0 0 .16-.43 1.14 1.14 0 0 0-.44-.93.25.25 0 0 0-.18 0 .49.49 0 0 0-.16.38z"
          />
          <path
            className="prefix__cls-25"
            d="M527.53 139.25a3.87 3.87 0 0 0 1.26 2.7 4.5 4.5 0 0 1-1-2c-.14-.64-.09-1.57.47-1.8s1.28.26 1.51.48a2.58 2.58 0 0 0-.61-.5c-.91-.49-1.63 0-1.63 1.12z"
          />
          <path
            className="prefix__cls-16"
            d="M534.35 142.22a.4.4 0 0 1-.6.37l-1.8-1-.6-.34a.13.13 0 0 0 0-.06.22.22 0 0 0 0-.09 4.24 4.24 0 0 0-1.94-3.34c-1.06-.62-1.92-.12-1.92 1.11v.13l-7.58-4.37a.31.31 0 0 0 0-.09 4.3 4.3 0 0 0-1.93-3.35c-1.06-.61-1.93-.12-1.93 1.12v.09l-1.51-.87v-12.07l13.58 7.84 2.87 2.12 1.3 6.32 1.73 3 .15 2z"
          />
          <path className="prefix__cls-17" d="m539.37 124.59-2.87-2.11-8.35 4.82 2.87 2.11 8.35-4.82z" />
          <path
            className="prefix__cls-6"
            d="M542.66 137.14a13.53 13.53 0 0 1-3.81 3.22 13.29 13.29 0 0 1-4.54 1.61l-.26-3.27 8.35-4.82z"
          />
          <path
            className="prefix__cls-17"
            d="M542.4 133.88a13.53 13.53 0 0 1-3.81 3.22 13.21 13.21 0 0 1-4.54 1.6l-1.73-3 8.36-4.82z"
          />
          <path
            className="prefix__cls-29"
            d="M540.68 130.92a19.1 19.1 0 0 1-3.66 2.71 26.83 26.83 0 0 1-4.69 2.11l-1.33-6.33 5.22-3 2.4-1.39.74-.42z"
          />
          <path
            className="prefix__cls-30"
            d="m532.15 140.45.17-.13a4.75 4.75 0 0 0 1.78.9 11.3 11.3 0 0 0 4.87-1.65 11.15 11.15 0 0 0 3.64-3.14s.25 0 .25.41a10.65 10.65 0 0 1-5.09 4.22c-2.41.66-3.91.79-4.65.58s-.97-1.19-.97-1.19z"
          />
          <path
            className="prefix__cls-31"
            d="M542.77 136.6a13.5 13.5 0 0 1-3.82 3.22 13.29 13.29 0 0 1-4.54 1.61 4 4 0 0 1-2.26-1v1.43a4 4 0 0 0 2.26 1 13.4 13.4 0 0 0 4.54-1.6 13.61 13.61 0 0 0 3.82-3.23c.23-.35.12-1.64 0-1.43z"
          />
          <path
            className="prefix__cls-6"
            d="m539.38 124.59-.74.42-2.4 1.39-5.22 3 1.31 6.33a26.83 26.83 0 0 0 4.69-2.11 19.1 19.1 0 0 0 3.66-2.71zm-3 9.1a28 28 0 0 1-3.63 1.63.21.21 0 0 1-.29-.17l-1.11-5.36a.38.38 0 0 1 .17-.38l3.39-2a.18.18 0 0 1 .28.12l1.35 5.74a.34.34 0 0 1-.15.42zm.67-.37a.18.18 0 0 1-.28-.12l-1.35-5.75a.36.36 0 0 1 .17-.38l.64-.37 2.62-1.52.11-.06a.18.18 0 0 1 .28.12l1.1 5.34a.5.5 0 0 1-.14.43 21 21 0 0 1-3.14 2.31z"
          />
          <path
            className="prefix__cls-11"
            d="M534.35 139.06a9.46 9.46 0 0 0 1.5-.36s.16 1.23.17 1.62-1.49.8-1.53.35c-.06-.67-.14-1.61-.14-1.61zm7.85-4.43a9 9 0 0 1-.91.91s.12 1 .17 1.33.26.26.6-.1.31-.38.26-1-.12-1.14-.12-1.14z"
          />
          <path className="prefix__cls-29" d="m530.76 129.58 1.04 5.56-3.65-2.11v-5.33l2.61 1.88z" />
          <path className="prefix__cls-32" d="m539.9 130.72-3.66-2.11v-1.92l2.62-1.51 1.04 5.54z" />
          <path
            className="prefix__cls-33"
            d="m536.18 138.62.18 1.78a.36.36 0 0 0 .27-.08l-.18-1.77zm.67-.2.18 1.77a.29.29 0 0 0 .26-.11l-.18-1.74zm.66-.26.18 1.76a.3.3 0 0 0 .26-.13l-.19-1.73zm.64-.31.18 1.75a.26.26 0 0 0 .25-.16l-.18-1.7zm.62-.34.18 1.74a.28.28 0 0 0 .25-.19l-.18-1.69zm.59-.37.19 1.72c.07 0 .2-.05.24-.2l-.18-1.67zm.56-.39.18 1.72c.09 0 .21-.07.24-.23l-.18-1.65zm.52-.38.18 1.71c.1 0 .22-.09.23-.26l-.18-1.63zm.47-.37.18 1.7c.11 0 .23-.1.23-.27l-.18-1.62z"
          />
          <path className="prefix__cls-19" d="M530.11 133.26v2a.33.33 0 0 0 .23.3 12.66 12.66 0 0 0-.1-2.19z" />
          <path className="prefix__cls-20" d="M530.24 133.33v1.9c0 .28.16.42.41.28l.18-.11a1 1 0 0 0 .45-.77v-1.9z" />
          <path className="prefix__cls-9" d="m531.28 132.73-.12-.07-1.05.6.13.07 1.04-.6z" />
          <path className="prefix__cls-21" d="M530.76 133.94v1.69a.24.24 0 0 0 .36.21l.68-.4" />
          <path className="prefix__cls-86" d="M520.56 126.26v5.01l1.04.6.01-5.01-1.05-.6z" />
          <path className="prefix__cls-86" d="m518.91 127.21 4.34 2.5v1.21l-4.34-2.5v-1.21z" />
          <path className="prefix__cls-9" d="m267 85-10.2 5.9 26.63 15.35c4.71-1.21 8-3.23 10.25-5.91z" />
          <path
            className="prefix__cls-9"
            d="m260 90.24 1.76-.81a5.61 5.61 0 0 0-.18-.91c-.05 0-1.12-.35-1.12-.35l-.64.89z"
          />
          <path className="prefix__cls-19" d="M291.24 89.69v2a.35.35 0 0 0 .23.31 12.77 12.77 0 0 0-.11-2.2z" />
          <path className="prefix__cls-20" d="M291.36 89.76v1.9c0 .29.17.42.41.28l.19-.11a1 1 0 0 0 .45-.77v-1.9z" />
          <path className="prefix__cls-9" d="m292.41 89.16-.12-.07-1.05.6.12.07 1.05-.6z" />
          <path className="prefix__cls-21" d="M291.88 90.37v1.87a.4.4 0 0 1-.2.36l-1 .61" />
          <path className="prefix__cls-22" d="m278.8 101.1 8.35-4.83V84.21l-8.35 4.83v12.06z" />
          <path
            className="prefix__cls-9"
            d="m278.16 100.73 1.75-.82a6.7 6.7 0 0 0-.17-.9c-.06 0-1.12-.35-1.12-.35l-.64.89z"
          />
          <path className="prefix__cls-17" d="m287.15 84.21-20.31-11.72-8.35 4.82 20.31 11.73 8.35-4.83z" />
          <path
            className="prefix__cls-23"
            d="m261 89.9-.38-.75.9-.52a1.07 1.07 0 0 1 1.09.1 3.71 3.71 0 0 1 1.61 3 1.3 1.3 0 0 1-.52 1.19l-.92.53-.4-.79A3.83 3.83 0 0 1 261 89.9z"
          />
          <path
            className="prefix__cls-24"
            d="M260 90.36a3.83 3.83 0 0 0 1.26 2.7 2.8 2.8 0 0 0 .35.25c.89.51 1.61 0 1.61-1.1a3.91 3.91 0 0 0-1-2.45 2.35 2.35 0 0 0-.61-.5c-.86-.51-1.61-.01-1.61 1.1z"
          />
          <path
            className="prefix__cls-25"
            d="M261.63 89.94c-.56-.32-1 0-1 .76a2.43 2.43 0 0 0 1 1.94c.57.33 1 0 1-.76a2.44 2.44 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M261.19 91a1.17 1.17 0 0 0 .44.93.24.24 0 0 0 .28 0 .47.47 0 0 0 .16-.42 1.13 1.13 0 0 0-.44-.93.31.31 0 0 0-.18-.05c-.15.06-.26.24-.26.47z"
          />
          <path
            className="prefix__cls-27"
            d="M261.29 91a1.17 1.17 0 0 0 .44.93.25.25 0 0 0 .18 0 .47.47 0 0 0 .16-.42 1.13 1.13 0 0 0-.44-.93.31.31 0 0 0-.18-.05.51.51 0 0 0-.16.47z"
          />
          <path
            className="prefix__cls-25"
            d="M260 90.36a3.83 3.83 0 0 0 1.26 2.7 4.41 4.41 0 0 1-1-2c-.14-.65-.09-1.57.47-1.81s1.28.26 1.51.49a2.35 2.35 0 0 0-.61-.5c-.88-.49-1.63.01-1.63 1.12z"
          />
          <path
            className="prefix__cls-23"
            d="m279.12 100.52-.37-.75.89-.52a1.07 1.07 0 0 1 1.09.09 3.74 3.74 0 0 1 1.61 3 1.32 1.32 0 0 1-.51 1.19l-.92.53-.4-.79a3.87 3.87 0 0 1-1.39-2.75z"
          />
          <path
            className="prefix__cls-24"
            d="M278.19 101a3.84 3.84 0 0 0 1.25 2.7 2.11 2.11 0 0 0 .35.26c.89.51 1.61 0 1.61-1.1a3.89 3.89 0 0 0-1-2.45 2.63 2.63 0 0 0-.61-.51c-.88-.53-1.6-.04-1.6 1.1z"
          />
          <path
            className="prefix__cls-25"
            d="M279.79 100.56c-.56-.33-1 0-1 .76a2.43 2.43 0 0 0 1 1.94c.57.33 1 0 1-.76a2.44 2.44 0 0 0-1-1.94z"
          />
          <path
            className="prefix__cls-26"
            d="M279.36 101.66a1.17 1.17 0 0 0 .43.93.24.24 0 0 0 .28 0 .5.5 0 0 0 .16-.43 1.12 1.12 0 0 0-.44-.92.25.25 0 0 0-.18 0c-.15-.03-.25.15-.25.42z"
          />
          <path
            className="prefix__cls-27"
            d="M279.45 101.62a1.17 1.17 0 0 0 .44.93.26.26 0 0 0 .18 0 .5.5 0 0 0 .16-.43 1.12 1.12 0 0 0-.44-.92.25.25 0 0 0-.18 0 .51.51 0 0 0-.16.42z"
          />
          <path
            className="prefix__cls-25"
            d="M278.19 101a3.84 3.84 0 0 0 1.25 2.7 4.41 4.41 0 0 1-1-2c-.14-.65-.09-1.57.47-1.81s1.28.26 1.51.49a2.63 2.63 0 0 0-.61-.51c-.9-.5-1.62-.01-1.62 1.13z"
          />
          <path
            className="prefix__cls-16"
            d="M285 104a.4.4 0 0 1-.6.38l-1.8-1-.6-.35a.28.28 0 0 0 0-.09 4.23 4.23 0 0 0-1.94-3.34c-1.06-.62-1.92-.12-1.92 1.11v.16l-14.31-8.27a.22.22 0 0 0 0-.08 4.29 4.29 0 0 0-1.9-3.52c-1.07-.61-1.93-.12-1.93 1.11v.1l-1.51-.87V77.31L278.8 89l2.87 2.11 1.3 6.33 1.73 3 .15 2z"
          />
          <path
            className="prefix__cls-28"
            d="m259.93 85.31.21.12a.69.69 0 0 1 .42.56v.06c0 .15-.09.2-.18.17a.49.49 0 0 1 .21.41v.07c0 .3-.21.23-.44.1l-.22-.13zm.24.73c.11.06.19 0 .19-.07v-.06a.33.33 0 0 0-.19-.31v.4zm0 .65c.11.06.19 0 .19-.08v-.11a.32.32 0 0 0-.19-.3h-.06v.5zm.59-.9.21.12v1c0 .17 0 .24.12.29s.12 0 .12-.15v-1l.21.12v1c0 .41-.21.32-.33.25a.65.65 0 0 1-.33-.63zm.86 1.43.16.09v.07a.32.32 0 0 0 .13.31c.08 0 .13 0 .13-.06a.52.52 0 0 0-.1-.29l-.22-.39a.88.88 0 0 1-.12-.38c0-.18.12-.24.32-.13a.58.58 0 0 1 .31.48.68.68 0 0 1 0 .15l-.16-.09v-.07a.31.31 0 0 0-.14-.3h-.11a.42.42 0 0 0 .06.21l.24.43a.94.94 0 0 1 .14.42c0 .19-.12.24-.33.12a.54.54 0 0 1-.31-.47.36.36 0 0 1 0-.1zm1.12.71.16.09v.07a.31.31 0 0 0 .13.3c.08 0 .13 0 .13-.06a.63.63 0 0 0-.1-.28l-.21-.38a.76.76 0 0 1-.12-.38c0-.18.11-.24.31-.12a.54.54 0 0 1 .31.46.68.68 0 0 1 0 .15l-.16-.09v-.06a.31.31 0 0 0-.13-.3h-.12a.44.44 0 0 0 .07.21l.23.42a.9.9 0 0 1 .14.41c0 .19-.13.24-.32.12a.53.53 0 0 1-.32-.46.68.68 0 0 1 0-.1zm.79-.47.5.29v.16l-.3-.17v.41l.23.13v.16l-.23-.13v.46l.27.23v.16l-.51-.29zm.65.38.22.13a.69.69 0 0 1 .41.62c0 .21-.06.3-.17.29l.21.67-.21-.12-.18-.61h-.08v.51l-.2-.12zm.23.83c.14.08.2 0 .2-.13v-.1a.34.34 0 0 0-.2-.32v.55zm.49-.42.21.13.15 1.16.15-1 .21.12-.25 1.22-.23-.14zm.85.5.21.11v1.36l-.21-.12zm.4 1.14v-.48c0-.41.21-.33.33-.26a.52.52 0 0 1 .28.45.68.68 0 0 1 0 .15l-.16-.09v-.07a.32.32 0 0 0-.1-.28c-.07 0-.11 0-.11.16v.62c0 .17 0 .24.11.29s.1 0 .1-.1v-.13l.19.1v.13c0 .22-.11.26-.29.15a.65.65 0 0 1-.35-.64zm.77-.47.5.29v.16l-.29-.17v.41l.23.13v.16l-.23-.13v.46l.3.18v.16l-.51-.29z"
          />
          <path className="prefix__cls-17" d="m290.02 86.32-2.87-2.11-8.35 4.83 2.87 2.11 8.35-4.83z" />
          <path
            className="prefix__cls-6"
            d="M293.31 98.88a13.53 13.53 0 0 1-3.81 3.22 13.15 13.15 0 0 1-4.54 1.6l-.26-3.26 8.35-4.82z"
          />
          <path
            className="prefix__cls-17"
            d="M293.05 95.62a13.73 13.73 0 0 1-3.81 3.22 13.15 13.15 0 0 1-4.54 1.6l-1.72-3 8.35-4.82z"
          />
          <path
            className="prefix__cls-29"
            d="M291.33 92.65a19.48 19.48 0 0 1-3.65 2.72 28 28 0 0 1-4.7 2.11l-1.31-6.33 5.22-3 2.4-1.38.74-.42z"
          />
          <path
            className="prefix__cls-30"
            d="m282.81 102.18.17-.12a4.79 4.79 0 0 0 1.77.89 13 13 0 0 0 8.51-4.78s.25 0 .25.4a10.66 10.66 0 0 1-5.09 4.23c-2.41.65-3.91.78-4.65.57s-.96-1.19-.96-1.19z"
          />
          <path
            className="prefix__cls-31"
            d="M293.42 98.34a13.5 13.5 0 0 1-3.82 3.22 13.15 13.15 0 0 1-4.54 1.6 3.93 3.93 0 0 1-2.25-1v1.44a3.88 3.88 0 0 0 2.25 1 13.15 13.15 0 0 0 4.54-1.6 13.5 13.5 0 0 0 3.82-3.22c.2-.36.12-1.66 0-1.44z"
          />
          <path
            className="prefix__cls-6"
            d="m290 86.33-.74.42-2.4 1.38-5.22 3 1.36 6.35a28 28 0 0 0 4.7-2.11 19.48 19.48 0 0 0 3.65-2.72zm-3 9.1a27.68 27.68 0 0 1-3.63 1.62.21.21 0 0 1-.29-.16l-.81-4a.4.4 0 0 1 .17-.38l3.39-2a.19.19 0 0 1 .29.12l1 4.39a.37.37 0 0 1-.12.41zm.67-.37a.18.18 0 0 1-.28-.12l-1-4.39a.36.36 0 0 1 .16-.38l.65-.37 2.61-1.51.12-.07a.17.17 0 0 1 .27.13l.8 4a.47.47 0 0 1-.14.42 21.57 21.57 0 0 1-3.15 2.29z"
          />
          <path
            className="prefix__cls-11"
            d="M285 100.79a9.92 9.92 0 0 0 1.5-.35s.16 1.23.17 1.61-1.49.81-1.53.35zm7.85-4.43a9 9 0 0 1-.91.91s.12 1 .17 1.33.26.27.6-.09.32-.38.26-1-.12-1.15-.12-1.15z"
          />
          <path
            className="prefix__cls-29"
            d="m281.6 92.44.8 4.14c0 .16-.06.23-.21.15l-3.13-1.81a.58.58 0 0 1-.26-.45v-4.08c0-.17.11-.22.24-.12L281.3 92a.87.87 0 0 1 .3.44z"
          />
          <path className="prefix__cls-32" d="m290.55 92.46-3.66-2.11v-.37l2.88-1.67.78 4.15z" />
          <path
            className="prefix__cls-33"
            d="m286.83 100.36.19 1.78a.33.33 0 0 0 .26-.09l-.18-1.76zm.67-.2.18 1.77a.38.38 0 0 0 .27-.11l-.19-1.75zm.66-.26.18 1.76a.32.32 0 0 0 .26-.14l-.19-1.72zm.64-.31.18 1.75a.3.3 0 0 0 .26-.16l-.19-1.71zm.62-.35.18 1.74a.26.26 0 0 0 .25-.18l-.18-1.69zm.58-.37.18 1.73c.07 0 .2-.06.24-.2l-.18-1.68zm.57-.38.19 1.72c.08 0 .2-.08.23-.23l-.18-1.66zm.52-.39.18 1.71c.1 0 .22-.09.23-.25l-.18-1.64zm.47-.37.18 1.7c.11 0 .23-.11.23-.28l-.18-1.62z"
          />
          <path className="prefix__cls-19" d="M280.76 95v2c0 .16.11.24.23.31a12.62 12.62 0 0 0-.1-2.19z" />
          <path className="prefix__cls-20" d="M280.89 95.07V97c0 .29.16.42.41.28l.19-.11a1 1 0 0 0 .44-.77v-1.9z" />
          <path className="prefix__cls-9" d="m281.93 94.46-.12-.07-1.05.61.13.07 1.04-.61z" />
          <path className="prefix__cls-21" d="M281.41 95.67v1.7a.24.24 0 0 0 .36.2l.68-.39" />
          <path
            className="prefix__cls-29"
            d="m282.36 92.17 7.54-4.35a.28.28 0 0 0 .13-.3l-.13-.68a.14.14 0 0 0-.22-.09l-7.53 4.35a.31.31 0 0 0-.14.3l.14.68a.13.13 0 0 0 .21.09zm-4.08 2.01v-4.09a.61.61 0 0 0-.26-.45l-3.54-2c-.15-.09-.26 0-.26.15v4.09a.59.59 0 0 0 .26.45l3.54 2c.14.09.26.02.26-.15zm-4.86-2.77v-4.09a.57.57 0 0 0-.26-.45l-3.54-2.05c-.15-.08-.26 0-.26.15v4.1a.61.61 0 0 0 .26.45l3.54 2c.14.12.26.06.26-.11zm-4.86-2.77v-4.09a.57.57 0 0 0-.26-.45l-3.54-2c-.15-.08-.26 0-.26.15v4.09a.57.57 0 0 0 .26.45l3.54 2.05a.16.16 0 0 0 .26-.2zm-4.86-2.77v-4.1a.61.61 0 0 0-.26-.45l-3.54-2c-.15-.08-.26 0-.26.15v4.09a.55.55 0 0 0 .26.45l3.54 2a.16.16 0 0 0 .26-.14z"
          />
          <path className="prefix__cls-28" d="m267.94 91.32 10.88 6.3v-1.26l-10.88-6.3v1.26z" />
          <path
            className="prefix__cls-8"
            d="m219.78 151.96-6.46 11.91 6.82.8-3.01 9.33 8.22-11.62-7.73-.81 2.16-9.61z"
          />
          <text className="prefix__cls-87" transform="translate(230.1 157.54)">
            {"Ele"}
            <tspan x={8.07} y={0} letterSpacing=".01em">
              {"c"}
            </tspan>
            <tspan x={11.1} y={0}>
              {"t"}
            </tspan>
            <tspan x={13.28} y={0} letterSpacing={0}>
              {"r"}
            </tspan>
            <tspan className="prefix__cls-90" x={15.45} y={0}>
              {"ic"}
            </tspan>
            <tspan x={0} y={7.88} letterSpacing="-.03em">
              {"V"}
            </tspan>
            <tspan x={3.45} y={7.88}>
              {"ehicle"}
            </tspan>
            <tspan x={0} y={15.77}>
              {"Cha"}
            </tspan>
            <tspan className="prefix__cls-92" x={10.62} y={15.77}>
              {"r"}
            </tspan>
            <tspan x={12.72} y={15.77} letterSpacing="-.01em">
              {"g"}
            </tspan>
            <tspan x={16.35} y={15.77}>
              {"ing"}
            </tspan>
          </text>
          <path
            className="prefix__cls-8"
            d="M410.9 36.12a2.69 2.69 0 1 1 2.69 2.69 2.7 2.7 0 0 1-2.69-2.69zm7.64 10.3h-9.89l.53-4.07a3.49 3.49 0 0 1 3.46-3.05h1.91a3.5 3.5 0 0 1 3.45 3.05zm-1.13-12.31a2.69 2.69 0 1 1 2.69 2.69 2.68 2.68 0 0 1-2.69-2.69z"
          />
          <path
            className="prefix__cls-8"
            d="M424.88 44.4h-6.07l-.27-2.14a4.23 4.23 0 0 0-2.54-3.32 3.49 3.49 0 0 1 3-1.65h1.91a3.48 3.48 0 0 1 3.46 3zm-15.1-10.29a2.69 2.69 0 1 0-2.69 2.69 2.69 2.69 0 0 0 2.69-2.69zM402.3 44.4h6.07l.28-2.14a4.2 4.2 0 0 1 2.52-3.32 3.48 3.48 0 0 0-3-1.65h-1.92a3.49 3.49 0 0 0-3.46 3z"
          />
          <text className="prefix__cls-87" transform="translate(399.75 54.97)">
            <tspan className="prefix__cls-94">{"E"}</tspan>
            <tspan x={3.21} y={0}>
              {"duc"}
            </tspan>
            <tspan className="prefix__cls-94" x={13.48} y={0}>
              {"a"}
            </tspan>
            <tspan x={16.62} y={0}>
              {"tion"}
            </tspan>
          </text>
          <path
            className="prefix__cls-8"
            d="M249.67 39h-.81a.11.11 0 0 0-.11.11v2.35h-.35v-5.19a1.65 1.65 0 0 0-1.66-1.65h-8.92a1.66 1.66 0 0 0-1.66 1.65v5.19h-.35v-2.34a.11.11 0 0 0-.11-.11h-.8a.11.11 0 0 0-.12.11v1.49a.41.41 0 0 0 .42.41h.22v.45a.39.39 0 0 0 .39.39h.35v3.66a.45.45 0 0 0-.45.44v.13a1.07 1.07 0 0 0 1.07 1.08h.22v.95a.29.29 0 0 0 .29.29h1.39a.29.29 0 0 0 .3-.29v-.95h6.67v.95a.29.29 0 0 0 .29.29h1.4a.29.29 0 0 0 .29-.29v-.95h.22a1.08 1.08 0 0 0 1.08-1.08V46a.45.45 0 0 0-.45-.44v-3.7h.36a.39.39 0 0 0 .39-.39V41h.22a.41.41 0 0 0 .41-.41v-1.47a.11.11 0 0 0-.19-.12zm-1.74 3.92a.7.7 0 1 1-.7-.7.69.69 0 0 1 .7.71zm-.36 1.55a.34.34 0 1 1-.34-.34.34.34 0 0 1 .34.35zm-.59-9a.43.43 0 1 1 0 .86.43.43 0 1 1 0-.86zm.43 2.84v2.54a.2.2 0 0 1-.2.2h-4.72V37h3.6a1.32 1.32 0 0 1 1.32 1.28zM246 44.37h-7.45v-.3H246zm0-1.75V43h-7.45v-.35zm0 1.05h-7.45v-.3H246zm-7-8.17a.1.1 0 0 1 .1-.1h6.47a.1.1 0 0 1 .1.1v.74a.1.1 0 0 1-.1.1h-6.47a.1.1 0 0 1-.1-.1zm-1.36-.06a.43.43 0 1 1-.43.43.43.43 0 0 1 .38-.43zm-.43 2.84a1.32 1.32 0 0 1 1.27-1.28h3.59v4h-4.71a.2.2 0 0 1-.2-.2zm.17 3.95a.7.7 0 1 1-.69.7.7.7 0 0 1 .64-.7zm.34 2.25a.34.34 0 1 1-.34-.34.34.34 0 0 1 .29.34zm1.51.64a.63.63 0 0 1-.55-.35h7.31a.63.63 0 0 1-.55.35z"
          />
          <text transform="translate(212.42 39.79)" fontSize={6.57} fontFamily="Aller" fill="#002030">
            {"Sma"}
            <tspan x={11.89} y={0} letterSpacing=".02em">
              {"r"}
            </tspan>
            <tspan x={14.2} y={0}>
              {"t"}
            </tspan>
            <tspan x={-24.08} y={7.89} letterSpacing="-.04em">
              {"T"}
            </tspan>
            <tspan x={-21.11} y={7.89} letterSpacing="-.01em">
              {"r"}
            </tspan>
            <tspan x={-18.99} y={7.89} letterSpacing={0}>
              {"anspo"}
            </tspan>
            <tspan x={-2.22} y={7.89} letterSpacing=".02em">
              {"r"}
            </tspan>
            <tspan x={0.09} y={7.89}>
              {"t"}
            </tspan>
            <tspan x={2.26} y={7.89} letterSpacing={0}>
              {"a"}
            </tspan>
            <tspan x={5.4} y={7.89}>
              {"tion"}
            </tspan>
          </text>
          <path className="prefix__cls-102" d="M254.43 40.42h33.74V66.5" />
          <circle className="prefix__cls-103" cx={254.52} cy={40.42} r={1.25} />
          <circle className="prefix__cls-103" cx={288.17} cy={66.2} r={1.25} />
          <path
            className="prefix__cls-8"
            d="m101.43 270.74-1 .72a5.49 5.49 0 0 0-9.31 0l-1-.72a6.68 6.68 0 0 1 11.21 0z"
          />
          <path className="prefix__cls-8" d="m103.32 269.29-.94.72a7.88 7.88 0 0 0-13.11 0l-1-.72a9 9 0 0 1 15 0z" />
          <path className="prefix__cls-8" d="m99.52 272.19-1 .73a3.1 3.1 0 0 0-5.49 0l-1-.73a4.29 4.29 0 0 1 7.4 0z" />
          <circle className="prefix__cls-8" cx={95.82} cy={273.96} r={1.57} />
          <text className="prefix__cls-87" transform="translate(84.51 286.11)">
            <tspan className="prefix__cls-104">{"M"}</tspan>
            <tspan x={5.32} y={0}>
              {"obili"}
            </tspan>
            <tspan x={17.29} y={0} letterSpacing=".01em">
              {"t"}
            </tspan>
            <tspan className="prefix__cls-90" x={19.53} y={0}>
              {"y"}
            </tspan>
          </text>
          <path className="prefix__cls-102" d="M114.43 273.88h33.75" />
          <circle className="prefix__cls-103" cx={114.53} cy={273.88} r={1.25} />
          <circle className="prefix__cls-103" cx={148.18} cy={273.88} r={1.25} />
          <path
            className="prefix__cls-8"
            d="M453.76 81.21h-2.1v-3.46a.69.69 0 0 0-.69-.7h-8.77a.63.63 0 0 0-.64.7v3.46h-2.09a.34.34 0 0 0-.35.38l.65 8.22a2 2 0 0 0 2 1.86H452a1.43 1.43 0 0 0 1.42-1.31l.7-8.77a.34.34 0 0 0-.36-.38zM442 78.38a.73.73 0 0 0 .29.07H451a.64.64 0 0 0 .28-.07v2.83H442zm2.73 11.69a.82.82 0 0 1-1.11-.38l-2.35-4.81a.83.83 0 0 1 1.5-.73l2.31 4.85a.82.82 0 0 1-.38 1.07zm3.45-.33a.83.83 0 0 1-1.11-.39l-2.35-4.81a.83.83 0 0 1 .38-1.11.84.84 0 0 1 1.12.38l2.35 4.81a.84.84 0 0 1-.42 1.12zm3.45-.34a.83.83 0 0 1-1.11-.38l-2.35-4.82a.83.83 0 0 1 .39-1.11.83.83 0 0 1 1.11.38l2.33 4.82a.83.83 0 0 1-.4 1.11z"
          />
          <text className="prefix__cls-87" transform="translate(459.9 82.95)">
            <tspan letterSpacing=".01em">{"I"}</tspan>
            <tspan className="prefix__cls-94" x={1.64} y={0}>
              {"n"}
            </tspan>
            <tspan className="prefix__cls-107" x={5.26} y={0}>
              {"t"}
            </tspan>
            <tspan x={7.39} y={0}>
              {"ellige"}
            </tspan>
            <tspan className="prefix__cls-94" x={22.29} y={0}>
              {"n"}
            </tspan>
            <tspan x={25.91} y={0} letterSpacing={0}>
              {"t"}
            </tspan>
            <tspan x={0} y={7.88}>
              {"Shopping"}
            </tspan>
          </text>
          <circle className="prefix__cls-103" cx={465.65} cy={99.07} r={1.25} />
          <circle className="prefix__cls-103" cx={465.65} cy={124.43} r={1.25} />
          <path className="prefix__cls-102" d="M465.65 124.43V99.01" />
          <path
            className="prefix__cls-8"
            d="M173.94 421.7h-13.21a2.07 2.07 0 0 0-2.07 2.07v5.94a2.08 2.08 0 0 0 2.07 2.08h13.21a2.08 2.08 0 0 0 2.07-2.08v-5.94a2.07 2.07 0 0 0-2.07-2.07zm-14.71 8v-5.94a1.5 1.5 0 0 1 1.5-1.5h5.94a1.5 1.5 0 0 1 1.5 1.5v5.94a1.5 1.5 0 0 1-1.5 1.5h-5.94a1.5 1.5 0 0 1-1.5-1.49z"
          />
          <path
            className="prefix__cls-8"
            d="M164.72 431.21h1.95v.58h-1.95zm0-9.51h1.95v.58h-1.95zm-3.96 5.04a2.94 2.94 0 1 1 2.94 2.95 2.94 2.94 0 0 1-2.94-2.95zm5.45-3.17a.44.44 0 1 1 .43.43.43.43 0 0 1-.43-.43zm10.92 8.91c-.44 0-.8.7-.9 1.63h-4.63a1.39 1.39 0 0 1-1.39-1.39v-1.22h-1v1.22a2.35 2.35 0 0 0 2.35 2.35h4.63c.1.93.46 1.63.9 1.63s.92-.95.92-2.11-.37-2.11-.88-2.11z"
          />
          <text className="prefix__cls-87" transform="translate(134.15 426.74)">
            <tspan letterSpacing="-.04em">
              {"T"}
              <tspan x={2.97} y={0} letterSpacing="-.01em">
                {"r"}
              </tspan>
              <tspan className="prefix__cls-90" x={5.08} y={0}>
                {"affic"}
              </tspan>
            </tspan>
            <tspan className="prefix__cls-104" x={-20.28} y={7.88}>
              {"M"}
            </tspan>
            <tspan x={-14.96} y={7.88}>
              {"anageme"}
            </tspan>
            <tspan className="prefix__cls-94" x={10.75} y={7.88}>
              {"n"}
            </tspan>
            <tspan x={14.38} y={7.88}>
              {"t"}
            </tspan>
          </text>
          <path className="prefix__cls-102" d="M184.46 428.57H226v-41.69" />
          <circle className="prefix__cls-103" cx={225.99} cy={386.88} r={1.25} />
          <circle className="prefix__cls-103" cx={184.46} cy={428.57} r={1.25} />
          <path
            className="prefix__cls-8"
            d="M386.75 445.39a.49.49 0 0 1 0-1 .49.49 0 0 0-.49-.5h-3.71a1.43 1.43 0 0 1-.5 1.46.51.51 0 0 0 .39.49.49.49 0 0 0-.39.48.51.51 0 0 0 .5.5h3.71a.5.5 0 0 0 .49-.5.48.48 0 0 0-.38-.48.5.5 0 0 0 .38-.45zm-2.94-13.5a4.65 4.65 0 0 0-2.78 7.89 5 5 0 0 1 1.52 3.56v.05h3.57v-.05a5 5 0 0 1 1.5-3.53 4.65 4.65 0 0 0-3.81-7.92zm1.94 5.73-3.5 2.58 1.6-2.35-1.22-1.6 3.79-2.51-1.82 2.56z"
          />
          <text className="prefix__cls-87" transform="translate(360.77 438.75)">
            {"Sma"}
            <tspan className="prefix__cls-111" x={11.89} y={0}>
              {"r"}
            </tspan>
            <tspan x={14.19} y={0}>
              {"t"}
            </tspan>
            <tspan x={-20.57} y={7.88} letterSpacing={0}>
              {"S"}
            </tspan>
            <tspan x={-17.35} y={7.88}>
              {"t"}
            </tspan>
            <tspan x={-15.18} y={7.88} letterSpacing="-.01em">
              {"r"}
            </tspan>
            <tspan x={-13.09} y={7.88}>
              {"eets Lig"}
            </tspan>
            <tspan className="prefix__cls-94" x={7.97} y={7.88}>
              {"h"}
            </tspan>
            <tspan x={11.59} y={7.88}>
              {"ts"}
            </tspan>
          </text>
          <path className="prefix__cls-102" d="M392.08 441.06h41.54v-41.68" />
          <circle className="prefix__cls-103" cx={433.62} cy={399.38} r={1.25} />
          <circle className="prefix__cls-103" cx={392.08} cy={441.06} r={1.25} />
          <text className="prefix__cls-87" transform="translate(637.79 31.35)">
            {"Sma"}
            <tspan className="prefix__cls-111" x={11.89} y={0}>
              {"r"}
            </tspan>
            <tspan x={14.19} y={0}>
              {"th"}
            </tspan>
            <tspan x={0} y={7.88}>
              {"Health"}
            </tspan>
          </text>
          <path
            className="prefix__cls-8"
            id="prefix__cls-38"
            d="M633.11 30.97h-5.62v-5.62h-3.75v5.62h-5.63v3.75h5.63v5.63h3.75v-5.63h5.62v-3.75z"
          />
          <path className="prefix__cls-102" d="M638.29 45.65v24.63h-22.34" />
          <circle className="prefix__cls-103" cx={615.95} cy={70.28} r={1.25} />
          <circle className="prefix__cls-103" cx={638.29} cy={45.65} r={1.25} />
          <path
            className="prefix__cls-8"
            d="m658.21 260-.05-.67-.54.41c-1.54 1.16-5.34-.54-6.68-1.29l-.18-.1-.18.1c-1.34.75-5.15 2.45-6.69 1.29l-.53-.41-.05.67c0 .4-.65 9.87 3.4 14a20.91 20.91 0 0 0 4 2.86h.08a20.91 20.91 0 0 0 4-2.86c4.07-4.16 3.45-13.63 3.42-14zm-3.92 13.5a25.79 25.79 0 0 1-3.48 2.57v-16.88c.87.46 4.57 2.3 6.74 1.44.02 2.09.01 9.49-3.26 12.84z"
          />
          <text className="prefix__cls-87" transform="translate(665.84 265.01)">
            <tspan letterSpacing="-.02em">{"P"}</tspan>
            <tspan x={3.4} y={0}>
              {"ublic"}
            </tspan>
            <tspan x={0} y={7.88} letterSpacing={0}>
              {"S"}
            </tspan>
            <tspan x={3.26} y={7.88}>
              {"a"}
            </tspan>
            <tspan x={6.43} y={7.88} letterSpacing="-.01em">
              {"f"}
            </tspan>
            <tspan x={8.26} y={7.88}>
              {"e"}
            </tspan>
            <tspan x={11.55} y={7.88} letterSpacing=".01em">
              {"t"}
            </tspan>
            <tspan x={13.78} y={7.88}>
              {"y"}
            </tspan>
          </text>
          <path className="prefix__cls-102" d="M616.46 241.96v24.62h22.34" />
          <circle className="prefix__cls-103" cx={638.8} cy={266.58} r={1.25} />
          <circle className="prefix__cls-103" cx={616.46} cy={241.96} r={1.25} />
          <path
            className="prefix__cls-8"
            d="M564.86 323.37a2.68 2.68 0 0 0-3.17 3.26 2.63 2.63 0 0 0 2 2 2.67 2.67 0 1 0 1.15-5.22zm4.42 3.15h-1.08a.54.54 0 0 1-.54-.54.54.54 0 0 1 .54-.53h1.08a.53.53 0 0 1 .53.53.54.54 0 0 1-.53.54zm-1.07-3.72-.76.76a.54.54 0 0 1-.76 0 .54.54 0 0 1 0-.76l.76-.76a.54.54 0 0 1 .76 0 .54.54 0 0 1 0 .76zm-3.38-1.88V322a.54.54 0 0 1-.54.54.54.54 0 0 1-.53-.54v-1.08a.53.53 0 0 1 .53-.53.54.54 0 0 1 .54.53zm-3.72 1.08.76.76a.54.54 0 0 1 0 .76.54.54 0 0 1-.76 0l-.76-.76a.54.54 0 0 1 0-.76.54.54 0 0 1 .76 0zm-1.87 3.38h1.07a.54.54 0 0 1 .54.54.54.54 0 0 1-.54.53h-1.07a.54.54 0 0 1-.54-.53.54.54 0 0 1 .54-.55zm1.06 3.72.76-.76a.54.54 0 0 1 .76 0 .54.54 0 0 1 0 .76l-.76.76a.54.54 0 0 1-.76 0 .54.54 0 0 1 0-.77zm3.38 1.87v-1.07a.54.54 0 0 1 .54-.54.54.54 0 0 1 .53.54v1.1a.54.54 0 0 1-.53.54.54.54 0 0 1-.54-.54zm4.07-3.46 2.36-.03-1.94 3.46 1.99-.03-4.15 4.48 1.49-4.45-1.55.02 1.8-3.45z"
          />
          <text className="prefix__cls-87" transform="translate(576.31 325.91)">
            <tspan className="prefix__cls-94">{"E"}</tspan>
            <tspan className="prefix__cls-107" x={3.21} y={0}>
              {"c"}
            </tspan>
            <tspan x={6.11} y={0}>
              {"o"}
            </tspan>
            <tspan x={0} y={7.88}>
              {"Ene"}
            </tspan>
            <tspan className="prefix__cls-92" x={10.17} y={7.88}>
              {"r"}
            </tspan>
            <tspan x={12.27} y={7.88}>
              {"gy"}
            </tspan>
          </text>
          <path className="prefix__cls-102" d="M530.87 351.55v-24.62h22.34" />
          <circle className="prefix__cls-103" cx={553.21} cy={326.92} r={1.25} />
          <circle className="prefix__cls-103" cx={530.87} cy={351.55} r={1.25} />
          <text className="prefix__cls-87" transform="translate(644.38 358.74)">
            {"Sma"}
            <tspan className="prefix__cls-111" x={11.89} y={0}>
              {"r"}
            </tspan>
            <tspan x={14.19} y={0}>
              {"t"}
            </tspan>
            <tspan x={0} y={7.88}>
              {"Home"}
            </tspan>
          </text>
          <path className="prefix__cls-102" d="M592.6 386.01v-24.62h22.33" />
          <circle className="prefix__cls-103" cx={614.94} cy={361.39} r={1.25} />
          <circle className="prefix__cls-103" cx={592.59} cy={386.01} r={1.25} />
          <path
            className="prefix__cls-8"
            d="m640.32 357.59-10.99-6.35-11 6.35H622v8.65h5.79v-4.85h3.07v4.85h5.8v-8.65h3.66z"
          />
          <text transform="translate(41.76 56.88)" fontSize={31.21} fontFamily="FjallaOne" fill="#fff">
            {"Sma"}
            <tspan x={56.45} y={0} letterSpacing=".02em">
              {"r"}
            </tspan>
            <tspan x={67.41} y={0} letterSpacing={0}>
              {"t"}
            </tspan>
            <tspan x={77.74} y={0} letterSpacing={0}>
              {"C"}
            </tspan>
            <tspan x={95.74} y={0}>
              {"i"}
            </tspan>
            <tspan x={103.05} y={0} letterSpacing=".01em">
              {"t"}
            </tspan>
            <tspan x={113.66} y={0}>
              {"y"}
            </tspan>
          </text>
          <text
            transform="translate(41.76 64.38)"
            fontSize={4.2}
            fill="#e3f7ff"
            fontFamily="Raleway-Light,Raleway Light"
            fontWeight={300}
          >
            <tspan letterSpacing="-.01em">{"L"}</tspan>
            <tspan x={1.92} y={0}>
              {"o"}
            </tspan>
            <tspan className="prefix__cls-125" x={4.23} y={0}>
              {"r"}
            </tspan>
            <tspan x={5.56} y={0}>
              {"em"}
            </tspan>
            <tspan className="prefix__cls-126" x={11.16} y={0} />
            <tspan x={13.3} y={0}>
              {"ipsum"}
            </tspan>
            <tspan className="prefix__cls-126" x={24.15} y={0} />
            <tspan x={26.28} y={0}>
              {"dolor"}
            </tspan>
            <tspan className="prefix__cls-126" x={35.62} y={0} />
            <tspan x={37.76} y={0}>
              {"sit"}
            </tspan>
            <tspan x={41.79} y={0} letterSpacing=".3em" />
            <tspan x={43.93} y={0}>
              {"amet"}
            </tspan>
            <tspan className="prefix__cls-126" x={52.94} y={0} />
            <tspan className="prefix__cls-128" x={55.08} y={0}>
              {"c"}
            </tspan>
            <tspan x={56.94} y={0}>
              {"onse"}
            </tspan>
            <tspan className="prefix__cls-129" x={65.33} y={0}>
              {"c"}
            </tspan>
            <tspan className="prefix__cls-128" x={67.27} y={0}>
              {"t"}
            </tspan>
            <tspan x={68.63} y={0}>
              {"etur"}
            </tspan>
            <tspan className="prefix__cls-126" x={75.81} y={0} />
            <tspan x={77.95} y={0}>
              {"adipiscing"}
            </tspan>
            <tspan className="prefix__cls-126" x={95.89} y={0} />
            <tspan x={98.03} y={0}>
              {"eli"}
            </tspan>
            <tspan className="prefix__cls-130" x={102.11} y={0}>
              {"t"}
            </tspan>
            <tspan x={103.48} y={0}>
              {", "}
            </tspan>
            <tspan x={0} y={5.04}>
              {"lobo"}
            </tspan>
            <tspan x={7.99} y={5.04} letterSpacing=".02em">
              {"r"}
            </tspan>
            <tspan x={9.46} y={5.04}>
              {"tis"}
            </tspan>
            <tspan className="prefix__cls-132" x={13.5} y={5.04} />
            <tspan x={15.19} y={5.04}>
              {"lacus"}
            </tspan>
            <tspan className="prefix__cls-132" x={24.06} y={5.04} />
            <tspan x={25.75} y={5.04}>
              {"sollicitudin"}
            </tspan>
            <tspan className="prefix__cls-132" x={44.92} y={5.04} />
            <tspan x={46.61} y={5.04}>
              {"di"}
            </tspan>
            <tspan className="prefix__cls-129" x={49.96} y={5.04}>
              {"c"}
            </tspan>
            <tspan x={51.9} y={5.04}>
              {"tumst"}
            </tspan>
            <tspan className="prefix__cls-132" x={62.15} y={5.04} />
            <tspan x={63.85} y={5.04}>
              {"mollis"}
            </tspan>
            <tspan x={74.28} y={5.04} letterSpacing=".19em" />
            <tspan className="prefix__cls-134" x={75.97} y={5.04}>
              {"f"}
            </tspan>
            <tspan x={77.14} y={5.04}>
              {"e"}
            </tspan>
            <tspan x={79.24} y={5.04} letterSpacing={0}>
              {"r"}
            </tspan>
            <tspan x={80.63} y={5.04}>
              {"me"}
            </tspan>
            <tspan className="prefix__cls-136" x={86.24} y={5.04}>
              {"n"}
            </tspan>
            <tspan x={88.55} y={5.04}>
              {"tum"}
            </tspan>
            <tspan className="prefix__cls-132" x={95.75} y={5.04} />
            <tspan x={97.44} y={5.04} letterSpacing="-.01em">
              {"f"}
            </tspan>
            <tspan x={98.61} y={5.04}>
              {"elis "}
            </tspan>
            <tspan className="prefix__cls-134" x={0} y={10.07}>
              {"f"}
            </tspan>
            <tspan x={1.17} y={10.07}>
              {"eu"}
            </tspan>
            <tspan className="prefix__cls-138" x={5.59} y={10.07}>
              {"g"}
            </tspan>
            <tspan x={7.91} y={10.07}>
              {"i"}
            </tspan>
            <tspan className="prefix__cls-136" x={8.89} y={10.07}>
              {"at"}
            </tspan>
            <tspan x={12.27} y={10.07}>
              {","}
            </tspan>
            <tspan className="prefix__cls-139" x={13.14} y={10.07} />
            <tspan x={14.32} y={10.07}>
              {"iaculis"}
            </tspan>
            <tspan className="prefix__cls-140" x={25.15} y={10.07} />
            <tspan x={26.32} y={10.07}>
              {"phasellus"}
            </tspan>
            <tspan className="prefix__cls-139" x={42.79} y={10.07} />
            <tspan x={43.96} y={10.07}>
              {"taciti"}
            </tspan>
            <tspan className="prefix__cls-140" x={52.61} y={10.07} />
            <tspan x={53.78} y={10.07}>
              {"sed"}
            </tspan>
            <tspan className="prefix__cls-139" x={59.91} y={10.07} />
            <tspan x={61.09} y={10.07}>
              {"nas"}
            </tspan>
            <tspan className="prefix__cls-128" x={67.1} y={10.07}>
              {"c"}
            </tspan>
            <tspan x={68.96} y={10.07}>
              {"etur"}
            </tspan>
            <tspan className="prefix__cls-140" x={76.13} y={10.07} />
            <tspan x={77.31} y={10.07}>
              {"blandi"}
            </tspan>
            <tspan className="prefix__cls-130" x={88.39} y={10.07}>
              {"t"}
            </tspan>
            <tspan x={89.77} y={10.07}>
              {"."}
            </tspan>
            <tspan className="prefix__cls-139" x={90.64} y={10.07} />
            <tspan x={91.81} y={10.07} letterSpacing=".01em">
              {"M"}
            </tspan>
            <tspan x={95.23} y={10.07}>
              {"i"}
            </tspan>
            <tspan className="prefix__cls-139" x={96.22} y={10.07} />
            <tspan x={97.39} y={10.07}>
              {"non "}
            </tspan>
            <tspan x={0} y={15.11}>
              {"cum"}
            </tspan>
            <tspan className="prefix__cls-142" x={7.69} y={15.11} />
            <tspan x={8.77} y={15.11}>
              {"quam"}
            </tspan>
            <tspan className="prefix__cls-143" x={18.97} y={15.11} />
            <tspan x={20.04} y={15.11}>
              {"pe"}
            </tspan>
            <tspan className="prefix__cls-144" x={24.54} y={15.11}>
              {"r"}
            </tspan>
            <tspan x={25.69} y={15.11}>
              {","}
            </tspan>
            <tspan className="prefix__cls-142" x={26.55} y={15.11} />
            <tspan x={27.63} y={15.11} letterSpacing="-.01em">
              {"v"}
            </tspan>
            <tspan x={29.61} y={15.11}>
              {"ehicula"}
            </tspan>
            <tspan className="prefix__cls-143" x={42.23} y={15.11} />
            <tspan x={43.3} y={15.11}>
              {"vitae"}
            </tspan>
            <tspan className="prefix__cls-142" x={51.82} y={15.11} />
            <tspan x={52.9} y={15.11}>
              {"ad"}
            </tspan>
            <tspan className="prefix__cls-143" x={57.29} y={15.11} />
            <tspan x={58.36} y={15.11}>
              {"tincidu"}
            </tspan>
            <tspan className="prefix__cls-136" x={70.61} y={15.11}>
              {"n"}
            </tspan>
            <tspan x={72.92} y={15.11}>
              {"t"}
            </tspan>
            <tspan className="prefix__cls-142" x={74.31} y={15.11} />
            <tspan x={75.38} y={15.11}>
              {"nas"}
            </tspan>
            <tspan className="prefix__cls-138" x={81.4} y={15.11}>
              {"c"}
            </tspan>
            <tspan x={83.26} y={15.11}>
              {"etu"}
            </tspan>
            <tspan className="prefix__cls-144" x={89.06} y={15.11}>
              {"r"}
            </tspan>
            <tspan x={90.21} y={15.11}>
              {","}
            </tspan>
            <tspan className="prefix__cls-142" x={91.08} y={15.11} />
            <tspan x={92.15} y={15.11}>
              {"ma"}
            </tspan>
            <tspan className="prefix__cls-138" x={97.68} y={15.11}>
              {"g"}
            </tspan>
            <tspan x={100} y={15.11}>
              {"na "}
            </tspan>
            <tspan x={0} y={20.15}>
              {"i"}
            </tspan>
            <tspan x={0.98} y={20.15} letterSpacing={0}>
              {"n"}
            </tspan>
            <tspan className="prefix__cls-128" x={3.3} y={20.15}>
              {"t"}
            </tspan>
            <tspan x={4.66} y={20.15}>
              {"eger posue"}
            </tspan>
            <tspan className="prefix__cls-125" x={24.25} y={20.15}>
              {"r"}
            </tspan>
            <tspan x={25.58} y={20.15} letterSpacing="-.01em">
              {"e"}
            </tspan>
            <tspan x={27.63} y={20.15}>
              {"."}
            </tspan>
          </text>
        </g>
        <g id="prefix__Designed_by_Freepik" data-name="Designed by Freepik">
          <path
            id="fuck"
            className="prefix__cls-8"
            d="M385.1 475.47a7.6 7.6 0 0 0-1.1 1.45l-.47-.24a.62.62 0 1 0-.33.68l.45.24a7 7 0 0 0-.54 1.74l.74.13a6.59 6.59 0 0 1 1.8-3.47zm5.49-2.3h-.51l-.07-.63a.72.72 0 1 0-1.16-.48.72.72 0 0 0 .41.57l.07.62a7.6 7.6 0 0 0-2.06.65l.33.68a6.81 6.81 0 0 1 3-.67 7.36 7.36 0 0 1 1.48.15l.16-.74a8.23 8.23 0 0 0-1.65-.15zm6.6 2.55a.6.6 0 1 0-.67-.59l-.42.36a7.82 7.82 0 0 0-1.41-1.14l-.4.64a6.78 6.78 0 0 1 2.56 2.93l.69-.31a7 7 0 0 0-.94-1.55l.4-.35zm-7.19 7.66h-1.15a15.87 15.87 0 0 1-2.48-.18 7.94 7.94 0 0 1-1.27-.29 6.19 6.19 0 0 0 11.34-1.38 10 10 0 0 1-2.46 1.13 17.75 17.75 0 0 1-3.98.72z"
          />
          <path
            className="prefix__cls-8"
            d="M390.59 474.69a6 6 0 0 0-6.08 5.94 5.93 5.93 0 0 0 .14 1.26c.67.48 2.71.89 5.35.73a11.48 11.48 0 0 0 6.67-2.16 5.67 5.67 0 0 0-.05-.58 6 6 0 0 0-6.03-5.19zm-2.16 6.51a1.85 1.85 0 1 1 1.85-1.85 1.85 1.85 0 0 1-1.85 1.85zm4.74-.91a1.36 1.36 0 1 1 1.36-1.36 1.36 1.36 0 0 1-1.36 1.36zm13.42-3.74a2.77 2.77 0 0 0-1.38-.23c-.55.06-.84.34-.84 1v.87h2.23v1.72h-2.23v5.45h-1.93v-5.45h-1.34v-1.72h1.34v-.89a2.46 2.46 0 0 1 2.57-2.78 3.91 3.91 0 0 1 1.59.31zm4.71 3.33a4.91 4.91 0 0 0-.53 0 1.44 1.44 0 0 0-1.51 1.61v3.91h-1.93v-7.17h1.87v.77a2.26 2.26 0 0 1 2-1 1.8 1.8 0 0 1 1.1.33zm7.7 1.88a6 6 0 0 1 0 .65h-5.09a1.74 1.74 0 0 0 1.85 1.49 2.88 2.88 0 0 0 1.81-.69l1.13 1.25a4.32 4.32 0 0 1-3.05 1.08 3.77 3.77 0 0 1-.1-7.54 3.46 3.46 0 0 1 3.45 3.76zm-5.11-.66H417a1.6 1.6 0 0 0-3.18 0zm12.73.66a5.79 5.79 0 0 1 0 .65h-5.12a1.72 1.72 0 0 0 1.84 1.49 2.88 2.88 0 0 0 1.81-.69l1.14 1.25a4.36 4.36 0 0 1-3.06 1.08 3.77 3.77 0 0 1-.1-7.54 3.46 3.46 0 0 1 3.49 3.76zm-5.12-.66h3.18a1.55 1.55 0 0 0-1.56-1.44 1.57 1.57 0 0 0-1.62 1.44zm13.5.67a3.55 3.55 0 0 1-3.47 3.77 2.62 2.62 0 0 1-2.11-.93v3.71h-1.92v-10.13h1.89v.81a2.6 2.6 0 0 1 2.14-1 3.55 3.55 0 0 1 3.47 3.77zm-5.67 0a1.85 1.85 0 1 0 1.84-2 1.84 1.84 0 0 0-1.88 2zm8.74-5.93a1.24 1.24 0 0 1-2.47 0 1.24 1.24 0 1 1 2.47 0zm-.26 9.52h-1.93v-7.17h1.93zm3.19-4.62 2.7-2.55h2.37l-3.48 3.37 3.5 3.8h-2.37l-2.72-2.9v2.9h-1.9V474.7h1.9zm-131.59 4.55v-1.05a3 3 0 0 1-2.39 1.23c-1.84 0-3.14-1.41-3.14-3.7S305.16 478 307 478a2.94 2.94 0 0 1 2.39 1.25v-3.76h1.1v9.76zm0-1.91v-3.21a2.62 2.62 0 0 0-2.12-1.14c-1.42 0-2.27 1.17-2.27 2.74s.85 2.72 2.27 2.72a2.63 2.63 0 0 0 2.12-1.11zm2.52-1.63a3.55 3.55 0 0 1 3.49-3.71c2.14 0 3.4 1.67 3.4 3.8v.28h-5.73a2.49 2.49 0 0 0 2.55 2.44 3.1 3.1 0 0 0 2.18-.89l.53.72a3.87 3.87 0 0 1-2.81 1.08 3.51 3.51 0 0 1-3.61-3.72zm3.47-2.8a2.36 2.36 0 0 0-2.31 2.36h4.64a2.3 2.3 0 0 0-2.33-2.31zm4.21 5.41.57-.79a3.21 3.21 0 0 0 2.33 1c1.08 0 1.67-.52 1.67-1.22 0-1.71-4.38-.66-4.38-3.28 0-1.1.95-2 2.63-2a3.61 3.61 0 0 1 2.63 1l-.52.76a2.75 2.75 0 0 0-2.11-.89c-1 0-1.56.48-1.56 1.11 0 1.55 4.38.53 4.38 3.28 0 1.19-1 2.14-2.79 2.14a3.75 3.75 0 0 1-2.85-1.11zm6.87-7.88a.74.74 0 0 1 .73-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.73.73.73 0 0 1-.73-.73zm.19 8.81v-7.07h1.1v7.07zm2.91 1.82.56-.82a2.71 2.71 0 0 0 2.3 1 2 2 0 0 0 2.27-2.13v-1a3 3 0 0 1-2.37 1.26c-1.85 0-3.15-1.37-3.15-3.66s1.29-3.68 3.15-3.68a2.92 2.92 0 0 1 2.37 1.25v-1.07h1.1v6.87c0 2.34-1.64 3.08-3.37 3.08a3.64 3.64 0 0 1-2.86-1.1zm5.13-3.85v-3.09a2.59 2.59 0 0 0-2.11-1.17c-1.42 0-2.27 1.12-2.27 2.69s.85 2.7 2.27 2.7a2.61 2.61 0 0 0 2.11-1.13zm7.7 2.03v-4.62c0-1.25-.63-1.64-1.58-1.64a2.73 2.73 0 0 0-2.09 1.09v5.17h-1.1v-7.07h1.1v1a3.48 3.48 0 0 1 2.52-1.21 2 2 0 0 1 2.25 2.29v5zm2.52-3.54a3.55 3.55 0 0 1 3.49-3.71c2.14 0 3.4 1.67 3.4 3.8v.28h-5.73a2.49 2.49 0 0 0 2.55 2.44 3.1 3.1 0 0 0 2.18-.89l.53.72a3.85 3.85 0 0 1-2.81 1.08 3.51 3.51 0 0 1-3.61-3.72zm3.47-2.8a2.37 2.37 0 0 0-2.31 2.36h4.64a2.29 2.29 0 0 0-2.33-2.31zm9.95 6.34v-1.05a3 3 0 0 1-2.39 1.23c-1.84 0-3.15-1.41-3.15-3.7S354.1 478 356 478a3 3 0 0 1 2.39 1.25v-3.76h1.1v9.76zm0-1.91v-3.21a2.65 2.65 0 0 0-2.12-1.14c-1.42 0-2.27 1.17-2.27 2.74s.85 2.72 2.27 2.72a2.66 2.66 0 0 0 2.12-1.11zm6.34 1.91v-9.76h1.1v3.76a2.93 2.93 0 0 1 2.39-1.25c1.84 0 3.15 1.47 3.15 3.73s-1.31 3.7-3.15 3.7a3 3 0 0 1-2.39-1.23v1.05zm3.21-.8c1.44 0 2.29-1.16 2.29-2.72s-.85-2.74-2.29-2.74a2.62 2.62 0 0 0-2.11 1.14v3.21a2.62 2.62 0 0 0 2.11 1.11zm4.63 2.58a1.73 1.73 0 0 0 .6.11 1 1 0 0 0 1.05-.74l.47-1.07-3-7.15h1.19l2.36 5.8 2.34-5.8h1.2l-3.54 8.51a2.11 2.11 0 0 1-2.08 1.44 3.52 3.52 0 0 1-.81-.11z"
          />
        </g>
      </g>
    </svg>
  );
};

export default SvgComponent;
