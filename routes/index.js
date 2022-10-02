var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  let user = req.session.user;

  let products = [
    {
      title: "Moe 4 Seater Dining Set In Walnut Finish",
      description:
        "Mintwud was conceptualized for compact homeswhich demand intelligent designs for small spaces, befitting modern lifestyles. Reusing resources has always underlined thevery philosophy and every design is made with the bestengineered wood, quality checked for accurate dimensions,sturdiness and finish.",
      img: "https://ii1.pepperfry.com/media/catalog/product/m/o/800x880/moe-4-seater-dining-set-in-walnut-finish---mintwud-by-pepperfry-moe-4-seater-dining-set-in-walnut-fi-gfvxve.jpg",
    },
    {
      title: "Bulb",
      description:
        "Classic Gem Pendant Lamp - Twisted Wire plugs into any wall outlet. Includes hooks, clamps and switch. Classic Industrial Style Dome Design fits well with any Country, Rustic, Primitive, Industrial, or Shabby Chic Decor. Pendant Light Cord Pulleys are available for purchase as well to add a nice industrial look to your lamp!",
      img: "https://ii1.pepperfry.com/media/catalog/product/c/o/800x880/copper-metal-hanging-light-by-homesake-copper-metal-hanging-light-by-homesake-9yjsug.jpg",
    },
    {
      title:
        "Winner Hutch Table with Cabinet & Bookshelf in Rigato Walnut Finish",
      description:
        "Kosmo furniture offers a wide range of furniture that is strong, durable and tough. It comes from the house of Spacewood, which is Indias largest furniture manufacturer. These products are made from melamine and membrane finish technology with an Iso: 9001, 18001, 14001 approved quality standards.",
      img: "https://ii1.pepperfry.com/media/catalog/product/w/i/800x880/winner-hutch-table-in-rigato-walnut-finish-by-spacewood-winner-hutch-table-in-rigato-walnut-finish-b-mncmxs.jpg",
    },
    {
      title: "Natsuki Tv Unit In Columbia Walnut Finish",
      description:
        "Mintwud was conceptualized for compact homes which demand intelligent designs for small spaces, befitting modern lifestyles. Reusing resources has always underlined the very philosophy and every design is made with the best engineered wood, quality checked for accurate dimensions, sturdiness and finish.",
      img: "https://ii1.pepperfry.com/media/catalog/product/n/a/800x880/natsuki-tv-unit-in-columbia-walnut-finish-by-mintwud-natsuki-tv-unit-in-columbia-walnut-finish-by-mi-xnx5hj.jpg",
    },
    {
      title: "Megumi Book Shelf In Columbia Walnut Finish",
      description:
        "Mintwud was conceptualized for compact homes which demand intelligent designs for small spaces, befitting modern lifestyles. Reusing resources has always underlined the very philosophy and every design is made with the best engineered wood, quality checked for accurate dimensions, sturdiness and finish.",
      img: "https://ii1.pepperfry.com/media/catalog/product/m/e/800x880/megumi-book-shelf-in-columbia-walnut-finish-by-mintwud-megumi-book-shelf-in-columbia-walnut-finish-b-nsqp0e.jpg",
    },
  ];
  res.render("index", { products, user });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
