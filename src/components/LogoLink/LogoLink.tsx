import { Link as RouterLink } from 'react-router-dom';

import { Link, SvgIcon } from '@mui/material';

export const LogoLink = (): JSX.Element => (
  <Link component={RouterLink} to="/">
    <SvgIcon
      component={'svg'}
      sx={{
        ':hover circle': {
          fill: '#fff',
          transition: '1s',
        },
        ':hover path': {
          fill: '#ff8ebc',
          transition: '1s',
        },
        borderRadius: 30,
        minHeight: 60,
        minWidth: 70,
      }}
    >
      <svg
        aria-labelledby="simpleicons-graphql-icon"
        clipRule="evenodd"
        fill="#ffffff"
        fillRule="evenodd"
        imageRendering="optimizeQuality"
        shapeRendering="geometricPrecision"
        textRendering="geometricPrecision"
        viewBox="0 0 3333 3333"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle className="fill-000000" cx="1667" cy="1667" fill="#e535ab" r="1667"></circle>
        <path
          className="fill-ffffff"
          d="m1829 936 389 225c65-67 172-70 240-6 11 11 21 24 30 38 46 81 18 185-63 231-14 8-29 14-44 18v450c90 21 146 112 124 203-3 16-10 31-18 46-47 80-150 108-231 61-16-9-30-20-42-34l-387 224c29 89-19 184-107 214-18 5-35 8-53 8-94 0-169-75-169-168 0-17 2-33 7-49l-390-224c-65 67-172 70-239 5-68-64-70-171-6-239 23-23 51-40 83-47v-450c-91-22-147-114-125-204 4-16 10-31 18-45 47-81 150-109 231-62 14 8 27 18 38 30l390-225c-27-90 24-184 114-210 15-5 31-7 48-7 93 0 169 75 169 169 0 16-3 33-7 48zm-41 70c-2 1-3 3-5 4l511 884c2-1 4-1 6-2v-451c-90-22-145-114-123-204 0-2 1-4 2-6l-391-225zm-238 4-5-5-390 226c25 89-26 183-116 209-2 0-4 1-6 1v451l7 2 510-884zm164 40c-31 9-64 9-94 0l-510 884c23 22 39 51 47 82h1019c8-31 25-60 48-82l-510-884zm78 1282 388-224c-2-4-3-8-3-12H1157l-2 7 390 225c31-32 74-51 122-51 49 0 94 21 125 55z"
          fill="#ffffff"
          id="favicon"
        ></path>
      </svg>
    </SvgIcon>
  </Link>
);
