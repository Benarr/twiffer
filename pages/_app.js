// 모든 페이지에서 공통인 부분 모음파일
import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head'; // html Head Tag 수정 시
import 'antd/dist/antd.css'

import wrapper from '../store/configureStore';


const Twiffer = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <title>Twiffer</title>
      </Head>
      <div></div>
      <Component />
    </>
  );
};

Twiffer.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(Twiffer);