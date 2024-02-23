import SEO from "../common/seo";
import Home from "../components/homes/home-3";
import Wrapper from "../layout/wrapper-3";


const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={'Epora'} />
      <Home />
    </Wrapper>
  );
};

export default index;