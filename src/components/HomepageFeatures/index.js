import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Premium Ingredients",
    // Img: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Drinkun uses only the finest, carefully selected ingredients to ensure
        every sip is a pure delight.
      </>
    ),
  },
  {
    title: "Innovative Flavors",
    // Img: require("@site/static/img/Bitmap.svg").default,
    description: (
      <>
        From classic to exotic, our diverse range of flavors will tantalize your
        taste buds and leave you craving for more.
      </>
    ),
  },
  {
    title: "Sustainable Packaging",
    // Img: require("@site/static/img/card1.svg").default,
    description: (
      <>
        We are committed to eco-friendly practices. Our packaging is designed to
        minimize environmental impact.
      </>
    ),
  },
];

function Feature({ Img, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <Img className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
