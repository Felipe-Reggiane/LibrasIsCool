import Layout from "../../components/layout/layout";
import Buttons from "../../components/buttons/buttons";
import images from "../../assets";

import { useContext } from "react";

import { MeuContexto } from "../../context/context";

function ButtonsScreen() {
  const [currentButtons, setCurrentButtons] = useContext(MeuContexto);

  const renderColors = () => {
    return (
      <div>
        {images.colors.map((color, index) => (
          <>
            <Buttons image={color.image} title={color.title} />
          </>
        ))}
      </div>
    );
  };

  return (
    <Layout>
      <div>{renderColors()}</div>
      <Buttons image={images.colors[0].image} title={images.colors[0].title} />
    </Layout>
  );
}

export default ButtonsScreen;
