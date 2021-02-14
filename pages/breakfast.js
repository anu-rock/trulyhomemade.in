import ProductRow from "../components/ProductRow";

export default function Breakfast() {
  return (
    <main>
      <h1 className="page-heading">
        <span>Breakfast Mixes</span>
      </h1>

      <ProductRow
        photoPath="images/suji-front.png"
        photoAltText="Packet of Truly Homemade's Breakfast Mix (suji)"
        title="Breakfast Mix"
        subtitle="'Subah subah wahi boring options?' Treat yourself with super-duper-wooper easy breakfast. Taste bhi, health bhi."
        iconPath="images/veg-icon.png"
        ctaText="Buy now"
        ctaUrl="#"
        photoOnLeft={false}
        showSeparator={true}
      />

      <ProductRow
        photoPath="images/poha-front.png"
        photoAltText="Packet of Truly Homemade's Poha Mix"
        title="Poha Mix"
        subtitle="'Subah subah wahi boring options?' Treat yourself with super-duper-wooper easy breakfast. Taste bhi, health bhi."
        iconPath="images/veg-icon.png"
        ctaText="Buy now"
        ctaUrl="#"
        photoOnLeft={false}
        showSeparator={true}
      />

      <ProductRow
        photoPath="images/sambar-front.png"
        photoAltText="Packet of Truly Homemade's Sambar Mix"
        title="Sambar Mix"
        subtitle="'Subah subah wahi boring options?' Treat yourself with super-duper-wooper easy breakfast. Taste bhi, health bhi."
        iconPath="images/veg-icon.png"
        ctaText="Buy now"
        ctaUrl="#"
        photoOnLeft={false}
        showSeparator={false}
      />
    </main>
  );
}
