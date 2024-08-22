import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="about image" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Welcome to Style Haven—your ultimate destination for fashion and elegance! At Style Haven, we believe that style is a form of self-expression and everyone deserves to feel confident and fabulous.</p>
          <p>Founded in 2024 by a team of fashion enthusiasts and industry veterans, Style Haven began with a simple yet ambitious goal: to curate a collection of clothing and accessories that reflect the latest trends while maintaining timeless appeal.</p>
          <b className="text-gray-800">Our Mission</b>
          <p>Our mission is to make high-quality, stylish fashion accessible to everyone. We are committed to offering a diverse range of products that cater to various tastes, preferences, and occasions. Whether you're looking for a chic dress for a special event or a comfortable yet stylish everyday outfit, Style Haven has you covered.</p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Quality:</b>
          <p className="text-gray-600"> We source our products from trusted brands and designers known for their commitment to quality. Every item is crafted with care and attention to detail, ensuring that you receive fashion that not only looks great but lasts.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Trend-Setting Collections:</b>
          <p className="text-gray-600"> Our expert team is always on the pulse of the latest fashion trends. We bring you curated collections that blend the hottest trends with timeless pieces, so you can stay ahead of the fashion curve.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Commitment to Sustainability:</b>
          <p className="text-gray-600"> We believe in fashion that makes a positive impact. That’s why we partner with brands that prioritize ethical practices and sustainability. When you shop with us, you’re supporting a more responsible fashion industry.</p>
        </div>
      </div>

      <NewsletterBox />

    </div>);
};

export default About;
