/* Fancy Box */

document.getElementById("openMap").addEventListener("click", function () {
  Fancybox.show(
    [
      {
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345095426!2d144.95373631531593!3d-37.81627974202113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b7c1d3a9cf8!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1699300000000!5m2!1sen!2sin",
        type: "iframe",
      },
    ],
    {
      Toolbar: { display: ["close"] },
      iframe: {
        preload: false,

        width: "600px",
        height: "600px",
        css: { borderRadius: "12px" },
      },
    }
  );
});
