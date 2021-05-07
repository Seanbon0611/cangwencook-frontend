import React from "react";
import "./egg-blog.styles.scss";
import eggchart from "../../assets/eggblog-assets/Eggchartpng.png";
import freerangeCarton from "../../assets/eggblog-assets/free-range-carton.png";
import pastureRaised from "../../assets/eggblog-assets/costco-eggs.png";
import organicPasture from "../../assets/eggblog-assets/organic-pasture.png";
import nonOrganicFree from "../../assets/eggblog-assets/non-organic-free.png";

const EggBlog = () => {
  return (
    <div className="egg-blog-container">
      <h1>How well do you know your eggs?</h1>
      <img
        alt="handfull of eggs"
        className="egg-thumbnail"
        src="https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
      />
      <p className="apply-spacing">
        <strong>Did you know? According to </strong>
        <a
          href="https://www.healthline.com/nutrition/white-vs-brown-eggs#TOC_TITLE_HDR_3"
          target="_blank"
          rel="noreferrer"
        >
          <strong>Healthline.com</strong>
        </a>
        <strong>...</strong>
      </p>
      <p className="apply-spacing">
        Egg color depends on the breed of the chicken. For example, White
        Leghorn chickens lay white-shelled eggs, while Plymouth Rocks and Rhode
        Island Reds lay brown-shelled eggs (Source 1, 2)
      </p>
      <p className="apply-spacing">
        Several studies have found that shell color has no significant effect on
        egg quality and composition (3)
      </p>
      <p className="apply-spacing">
        <strong>Oops, I ALMOST bought the same colored egg yolks!</strong>
      </p>
      <p className="apply-spacing">
        One carton is labeled organic, pasture-raised eggs. The other carton is
        labeled free-range eggs. (Open Nature is the brand name and has nothing
        to do with the type of egg).&nbsp;
      </p>
      <p className="apply-spacing">
        The two egg carton labels are clearly different, with distinctive
        keywords labeled to help consumers differentiate the type of egg they
        were going to purchase.
      </p>
      <img
        className="egg-blog-img"
        src={freerangeCarton}
        alt="free-range egg carton"
      />
      <img
        className="egg-blog-img"
        src={pastureRaised}
        alt="pasture-raised eggs"
      />
      <p className="apply-spacing">
        <strong>
          The color of the egg yolk from both carton are both yellow but the
          Organic, Pasture-Raised Egg is deeper in yellow
        </strong>
      </p>
      <img
        className="egg-blog-img"
        src={organicPasture}
        alt="organic pasture egg"
      />
      <img
        className="egg-blog-img"
        src={nonOrganicFree}
        alt="non-organic egg"
      />
      <p className="apply-spacing">
        <strong>Honestly&hellip;.</strong>
      </p>
      <p className="apply-spacing">
        I thought the non-organic, free-range carton of eggs would have a
        lighter or more yellower egg-yolk behind the brown-colored shell.
      </p>
      <p className="apply-spacing">
        I am going to make it easier for you to compare the egg cartons without
        using too many words. You can view the comparison chart I created below
        to evaluate yourself.&nbsp;
      </p>
      <p className="apply-spacing">
        I want to extend the opportunity for you to be a smarter consumer when
        it comes to the type of eggs you like to eat.
      </p>
      <p className="apply-spacing">
        I&rsquo;m sure that many consumers are confused as they walk down the
        aisles of their local grocery store with only their{" "}
        <strong>&lsquo;this is what I grew up on&rsquo;</strong> lens and
        wanting to save a few dollars to end up with a lower quality carton of
        eggs.
      </p>
      <p className="apply-spacing">
        <em>
          Note: I am not an egg expert. I am a learner and this is what
          I&rsquo;ve learned about the various eggs. There is more in-depth
          analysis of each category out there in the WWW. If you prefer this
          type of learning, then please find Google them.
        </em>
      </p>
      <p className="apply-spacing">
        To help you quickly compare my two carton of eggs with cage-free and
        commercially-farmed eggs{" "}
        <span style={{ textDecoration: "underline" }}>
          in the United States
        </span>
        <em>(EU countries have slightly different standard)</em>
        <span style={{ textDecoration: "underline" }}>:</span>
      </p>
      <img className="egg-blog-img" src={eggchart} alt="eggchart" />
      <p className="apply-spacing">
        <strong>
          What is the difference between organic and non-organic eggs?
        </strong>
      </p>
      <p className="apply-spacing">
        First and foremost, to receive the USDA organic stamp, farmers will need
        to pass this set of requirements. Naturally, meeting a higher set of
        standards could be inferred as a higher quality product. This stamp
        confirms this hypothetical.
      </p>
      <p className="apply-spacing">
        According to{" "}
        <a
          href="https://www.dovemed.com/healthy-living/wellness-center/are-organic-eggs-healthier-regular-eggs/"
          target="_blank"
          rel="noreferrer"
        >
          DovMed.com
        </a>
      </p>
      <p className="apply-spacing">
        <em>
          Organic food certification is a self-regulated term depending on the
          national government that regulates it. In the United States, organic
          foods must not have any artificial food additives or genetically
          modified ingredients. In addition, organic foods must refrain from
          artificial methods, materials, and conditions like chemical ripening
          and food irradiation. Organic farmers can use pesticides as long as
          they are not synthetic. However, if pests and weeds are too difficult
          to manage through organic pesticides or herbicides, synthetic
          substances that are approved on the National List of synthetic
          substances can be used.
        </em>
      </p>
      <p className="apply-spacing">
        <strong>Heathline.com: </strong>
        <a
          href="https://www.healthline.com/nutrition/white-vs-brown-eggs#TOC_TITLE_HDR_3"
          target="_blank"
          rel="noreferrer"
        >
          <strong>
            https://www.healthline.com/nutrition/white-vs-brown-eggs#TOC_TITLE_HDR_3
          </strong>
        </a>
      </p>
      <p className="apply-spacing">
        <strong>DovMed.com: </strong>
        <a
          href="https://www.dovemed.com/healthy-living/wellness-center/are-organic-eggs-healthier-regular-eggs/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>
            https://www.dovemed.com/healthy-living/wellness-center/are-organic-eggs-healthier-regular-eggs/
          </strong>
        </a>
      </p>
      <p className="apply-spacing">
        <strong>Source 1: </strong>
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/22742508/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>https://pubmed.ncbi.nlm.nih.gov/22742508/</strong>
        </a>
      </p>
      <p className="apply-spacing">
        <strong>Source 2: </strong>
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/11194033/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>https://pubmed.ncbi.nlm.nih.gov/11194033/</strong>
        </a>
      </p>
      <p className="apply-spacing">
        <strong>Source 3: </strong>
        <a
          href="https://pubmed.ncbi.nlm.nih.gov/20181877/"
          target="_blank"
          rel="noreferrer"
        >
          <strong>https://pubmed.ncbi.nlm.nih.gov/20181877/</strong>
        </a>
      </p>
    </div>
  );
};

export default EggBlog;

/*
<div className="table-container">
        <strong className="table-element">Category</strong>
        <strong className="table-element">Organic-Eggs</strong>
        <strong className="table-element">Free Range eggs</strong>
        <strong className="table-element">Cage-Free eggs</strong>
        <strong className="table-element">
          Commercially-farmed Non Organic Eggs
        </strong>
        <strong className="table-element">Color of egg</strong>
        <span className="table-element">Brown or White</span>
        <span className="table-element">Brown or White</span>
        <span className="table-element">Brown or White</span>
        <span className="table-element">Brown or White</span>
        <strong className="table-element">Cage</strong>
        <span className="table-element">Cage-Free</span>
        <span className="table-element">Cage-Free</span>
        <span className="table-element">Cage-Free</span>
        <span className="table-element">Crowded Cages</span>
        <strong className="table-element">Access to Outside Area</strong>
        <span className="table-element">
          Yes but no min. requirements on size of outside area
        </span>
        <span className="table-element">
          Yes but no min. requirements on size of outside area; No guarantee
          outdoor access
        </span>
        <span className="table-element">
          No guarantee outdoor access, and many never see daylight.
        </span>
        <span className="table-element">None</span>
        <strong className="table-element">Pasture-Raised</strong>
        <span className="table-element">Free roaming</span>
        <span className="table-element">Free roaming</span>
        <span className="table-element">
          Free roaming within barns or covered chicken coops
        </span>
        <span className="table-element">None</span>
        <strong className="table-element">Feed</strong>
        <span className="table-element">
          Organic grain, greens and insects as they can roam; No animal
          by-product ever
        </span>
        <span className="table-element">
          Grain mixture but can supplement their diet with greens and insects as
          they can roam
        </span>
        <span className="table-element">Commercial feed</span>
        <span className="table-element">Commercial feed</span>
        <strong className="table-element">Antibiotics</strong>
        <span className="table-element">No</span>
        <span className="table-element">Use is unrestricted</span>
        <span className="table-element">Use is unrestricted</span>
        <span className="table-element">Use is unrestricted</span>
        <strong className="table-element">Use of Pesticide/Fertilizer</strong>
        <span className="table-element">
          No, min, Req is 3+ year of pesticide/fertilizer-free land
        </span>
        <span className="table-element">Possible</span>
        <span className="table-element">Highly Possible</span>
        <span className="table-element">Highly Possible</span>
        <strong className="table-element">Macronutrients</strong>
        <span className="table-element">Same</span>
        <span className="table-element">Same</span>
        <span className="table-element">Same</span>
        <span className="table-element">Same</span>
      </div>
*/
