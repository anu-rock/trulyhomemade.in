import SlidesContainer from "../components/SildesContainer";
import Slide from "../components/Slide";
import ProductRow from "../components/ProductRow";
import ContentWithPhoto from "../components/ContentWithPhoto";
import GalleryContainer from "../components/GalleryContainer";
import GalleryItem from "../components/GalleryItem";

export default function Home() {
  return (
    <main>
      <SlidesContainer name="home">
        <Slide
          backgroundImagePath="images/slider-couple-cooking.jpg"
          backgroundImageAltText=""
          headingOne="Anybody Can Cook"
          headingTwo="Tasty Meals"
          subHeading="Impress your loved ones, friends, or yourself with delicious food in <img class='preserve' src='images/digit-three.png' alt='3' width='40' /> easy steps."
        />

        <Slide
          backgroundImagePath="images/slider-bowls-of-spices.jpg"
          backgroundImageAltText=""
          headingOne="100%"
          headingTwo="Natural Ingredients"
          subHeading="✅ No artificial flavors. ✅ No preservatives."
        />
      </SlidesContainer>

      <ProductRow
        photoPath="images/gravies-scaled.png"
        photoAltText="Packets of Truly Homemade's all-purpose gravies"
        title="All-Purpose Gravies"
        subtitle="Making restaurant-style Indian gravies at home was never easier. 
          In 3 easy steps, spoil yourself with yummy flavors: just open, mix, and cook. No cutting shutting, no rona dhona. 
          Impress your friends with Malai Kofta, surprise your wife with Paneer Makhani, or charm your mother with Mushroom Do Pyaza."
        iconPath="images/veg-icon.png"
        detailUrl="#"
        showSeparator={true}
      />

      <ProductRow
        photoOnLeft={false}
        photoPath="images/gravies-scaled.png"
        photoAltText="Packets of Truly Homemade's all-purpose gravies"
        title="Breakfast Mixes"
        subtitle="'Subah subah wahi boring options?' Treat yourself with super-duper-wooper easy breakfast. Taste bhi, health bhi."
        iconPath="images/veg-icon.png"
        detailUrl="#"
        showSeparator={false}
      />

      <ContentWithPhoto
        title="And hence began our journey..."
        content="<p>It all began during the 2020 pandameic. India became home to one of the toughest lockdowns in the world.
      Restaurants closed down and food deliveries became restricted as a result of a fear of infection from
      the stubborn virus. Access to tasty food was lost.</p><p>
      Armed with 5 years of experience in the food industry, we embarked on a mission to make tasty and
      healthy food accessible again. Hence was born Truly Homemade, a range of ready-to-cook gravies and
      breakfast mixes. We are driven by only one and only one goal: <strong>Everyone is entitled to good food (tasty + healthy).</strong>
    </p>"
        photoImagePath="images/cooking-at-home.jpg"
        backgroundImagePath="/images/about-bg.jpg"
        readMoreUrl="/about"
      />

      <GalleryContainer
        title="Recipes"
        subtite="Unlock dozens of tasty dishes with Truly Homemade's ready-to-cook options. Give one of these recipes a try."
      >
        <GalleryItem
          imagePath="images/gallery-img-01.jpg"
          imageThumbPath="images/gallery-img-01.jpg"
          imageAltText="Gallery Images"
        />

        <GalleryItem
          imagePath="images/gallery-img-02.jpg"
          imageThumbPath="images/gallery-img-02.jpg"
          imageAltText="Gallery Images"
        />

        <GalleryItem
          imagePath="images/gallery-img-03.jpg"
          imageThumbPath="images/gallery-img-03.jpg"
          imageAltText="Gallery Images"
        />
      </GalleryContainer>
    </main>
  );
}
