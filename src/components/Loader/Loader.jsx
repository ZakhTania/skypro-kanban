import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={220}
    height={130}
    viewBox="0 0 220 130"
    backgroundColor="#c1cddc"
    foregroundColor="#e9eef7"
    {...props}
  >
    <rect x="12" y="15" rx="10" ry="10" width="88" height="20" />
    <rect x="13" y="97" rx="3" ry="3" width="57" height="12" />
    <rect x="14" y="50" rx="3" ry="3" width="113" height="12" />
    <rect x="185" y="23" rx="3" ry="3" width="20" height="4" />
    <rect x="15" y="50" rx="3" ry="3" width="113" height="12" />
  </ContentLoader>
);

export default MyLoader;
