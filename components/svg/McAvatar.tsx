const McAvatar = () => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <circle cx="25" cy="25" r="25" fill="url(#pattern0)" />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_411_2" transform="scale(0.0125)" />
      </pattern>
      <image
        id="image0_411_2"
        width="80"
        height="80"
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export default McAvatar;