import SlidesContainer from "../components/SildesContainer";
import Slide from "../components/Slide";
import ProductRow from "../components/ProductRow";
import ContentWithPhoto from "../components/ContentWithPhoto";
import GalleryContainer from "../components/GalleryContainer";
import GalleryItem from "../components/GalleryItem";

export default function Gravies() {
  return (
    <main>
      <h1 className="page-heading">
        <span>Instant Gravies</span>
      </h1>

      <ProductRow
        photoPath="images/red-gravy-front.png"
        photoAltText="Packet of Truly Homemade's Makhani Masala (red gravy)"
        title="Makhani Masala"
        subtitle="Making restaurant-style Indian gravies at home was never easier. 
          In 3 easy steps, spoil yourself with yummy flavors: just open, mix, and cook. No cutting shutting, no rona dhona. 
          Impress your friends with Malai Kofta, surprise your wife with Paneer Makhani, or charm your mother with Mushroom Do Pyaza."
        iconPath="images/veg-icon.png"
        detailUrl="#"
        showSeparator={true}
      />

      <ProductRow
        photoPath="images/white-gravy-front.png"
        photoAltText="Packet of Truly Homemade's Masti Malai (white gravy)"
        title="Masti Malai"
        subtitle="Making restaurant-style Indian gravies at home was never easier. 
          In 3 easy steps, spoil yourself with yummy flavors: just open, mix, and cook. No cutting shutting, no rona dhona. 
          Impress your friends with Malai Kofta, surprise your wife with Paneer Makhani, or charm your mother with Mushroom Do Pyaza."
        iconPath="images/veg-icon.png"
        detailUrl="#"
        showSeparator={true}
      />

      <ProductRow
        photoPath="images/yellow-gravy-front.png"
        photoAltText="Packet of Truly Homemade's Shahi Dawat (yellow gravy)"
        title="Shahi Dawat"
        subtitle="Making restaurant-style Indian gravies at home was never easier. 
          In 3 easy steps, spoil yourself with yummy flavors: just open, mix, and cook. No cutting shutting, no rona dhona. 
          Impress your friends with Malai Kofta, surprise your wife with Paneer Makhani, or charm your mother with Mushroom Do Pyaza."
        iconPath="images/veg-icon.png"
        detailUrl="#"
        showSeparator={false}
      />
    </main>
  );
}
