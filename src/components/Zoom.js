import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, {
  useState,
  useLayoutEffect,
  useRef,
  memo,
  useEffect,
} from "react";
import "./styles/zoom.css";
var ON_TYPES = {
  mouseover: "mouseover",
  grab: "grab",
};

var preventBehavior = function preventBehavior(e) {
  if (e.cancelable) {
    e.preventDefault();
  }
};

var Zoom = function Zoom(props) {
  var src = props.src;
  if (document.documentElement.className) {
    src = props.srcWebp;
  }
  var zoomSrc = props.zoomSrc,
    duration = props.duration,
    magnify = props.magnify,
    on = props.on,
    onImageLoaded = props.onImageLoaded,
    onZoomIn = props.onZoomIn,
    onZoomOut = props.onZoomOut,
    alt = props.alt,
    touch = props.touch;

  var _useState = useState({
      left: 0,
      top: 0,
    }),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];

  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isZoom = _useState4[0],
    setIsZoom = _useState4[1];

  var imageRef = useRef(null);
  useEffect(
    function () {
      if (isZoom) {
        onZoomIn(imageRef.current);
      } else {
        onZoomOut(imageRef.current);
      }
    },
    [isZoom]
  );
  useLayoutEffect(function () {
    var image = document.createElement("img");

    image.onload = function () {
      setData(
        _objectSpread({}, data, {
          width: imageRef.current.clientWidth * magnify,
          height: imageRef.current.clientHeight * magnify,
        })
      );
      onImageLoaded(imageRef.current);
    };

    image.src = src;
  }, []);

  var getPos = function getPos(e) {
    var isTouch =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var rect = e.target.getBoundingClientRect();
    var clientX = isTouch ? e.targetTouches[0].clientX : e.clientX;
    var clientY = isTouch ? e.targetTouches[0].clientY : e.clientY;
    var x = clientX - rect.left;
    var y = clientY - rect.top;
    x = Math.max(0, x);
    y = Math.max(0, y);
    return {
      x: x,
      y: y,
    };
  };

  var zoom = function zoom(e) {
    var isTouch =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var pos = getPos(e, isTouch);
    var originWidth = data.width / magnify;
    var originHeight = data.height / magnify;
    var left = (pos.x / originWidth) * (originWidth - data.width);
    var top = (pos.y / originHeight) * (originHeight - data.height);
    setData(
      _objectSpread({}, data, {
        left: "".concat(left, "px"),
        top: "".concat(top, "px"),
      })
    );
  };

  var onMouseMove = function onMouseMove(e) {
    if (!isZoom) {
      return;
    }

    zoom(e);
  };

  var onMouseEnter = function onMouseEnter() {
    if (on === ON_TYPES.mouseover) {
      setIsZoom(true);
    }
  };

  var onMouseLeave = function onMouseLeave() {
    setIsZoom(false);
  };

  var onMouseDown = function onMouseDown(e) {
    if (on === ON_TYPES.grab) {
      setIsZoom(true);
      zoom(e);
    }
  };

  var onMouseUp = function onMouseUp() {
    if (on === ON_TYPES.grab) {
      setIsZoom(false);
    }
  };

  var onTouchStart = function onTouchStart(e) {
    if (!touch) {
      return;
    }

    window.addEventListener("touchmove", preventBehavior, {
      passive: false,
    });
    setIsZoom(true);
    zoom(e, true);
  };

  var onTouchMove = function onTouchMove(e) {
    if (!touch) {
      return;
    }

    zoom(e, true);
  };

  var onTouchEnd = function onTouchEnd() {
    if (!touch) {
      return;
    }

    window.removeEventListener("touchmove", preventBehavior);
    setIsZoom(false);
  };

  return React.createElement(
    "div",
    {
      className: "react-zoom-wrapper",
      style: {
        cursor: on === ON_TYPES.grab && isZoom ? "grab" : "default",
      },
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onMouseMove: onMouseMove,
      onTouchStart: onTouchStart,
      onTouchMove: onTouchMove,
      onTouchEnd: onTouchEnd,
    },
    React.createElement("img", {
      ref: imageRef,
      alt: alt,
      className: "react-zoom-origin-image",
      src: src,
    }),
    !!data.width &&
      React.createElement("img", {
        className: "react-zoom-image",
        style: {
          width: "".concat(data.width, "px"),
          height: "".concat(data.height, "px"),
          left: data.left,
          top: data.top,
          transition: "opacity ".concat(duration, "ms ease-in-out"),
          opacity: +isZoom,
        },
        alt: alt,
        src: zoomSrc || src,
      })
  );
};

Zoom.defaultProps = {
  zoomSrc: "",
  touch: true,
  alt: "zoom",
  on: ON_TYPES.mouseover,
  magnify: 2,
  duration: 200,
  onImageLoaded: function onImageLoaded() {},
  onZoomIn: function onZoomIn() {},
  onZoomOut: function onZoomOut() {},
};
export default memo(Zoom);
