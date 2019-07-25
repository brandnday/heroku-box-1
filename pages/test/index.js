import React from 'react'

const Index = (props) => (
  <div>
    <p>{props.stars}</p>
  </div>
);


Index.getInitialProps = async ({ req }) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("getinitprops", ip)
  return { stars: ip };
};
export default Index;