import React from 'react'

const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
);


Index.getInitialProps = async ({ req }) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log("getinitprops", ip)
  return { stars: "asdf" };
};
export default Index;