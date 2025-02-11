const express = require("express");
const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
// const { Readable } = require("stream");
// const axios = require("axios");

const app = express();
let sitemap;

// function getDynamicRoutes() {
//   // fetch dynamic routes from your server
//   // for example, using axios

//   //   This is the code that needs to get the actual backend where the data would be
//   return axios
//     .get("https://your-server.com/api/routes")
//     .then((response) => {
//       return response.data.map((route) => ({
//         url: route.url,
//         changefreq: route.changefreq,
//         priority: route.priority,
//       }));
//     })
//     .catch((error) => {
//       console.error("Error fetching dynamic routes:", error);
//       return [];
//     });
// }

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/sitemap.xml", function (req, res) {
  res.header("Content-Type", "application/xml");
  res.header("Content-Encoding", "gzip");
  // if we have a cached entry send it
  if (sitemap) {
    res.send(sitemap);
    return;
  }

  try {
    const smStream = new SitemapStream({
      hostname: "https://DesignguyLTD.github.io/reevgig/",
    });
    const pipeline = smStream.pipe(createGzip());

    // pipe your entries or directly write them.
    smStream.write({ url: "/", changefreq: "weekly", priority: 0.8 });
    smStream.write({ url: "/signup", changefreq: "daily", priority: 0.9 });
    smStream.write({ url: "/login", changefreq: "weekly", priority: 0.5 }); // changefreq: 'weekly',  priority: 0.5
    smStream.write({ url: "/onboarding", changefreq: "weekly", priority: 0.5 });
    smStream.write({
      url: "/resetpassword",
      changefreq: "weekly",
      priority: 0.5,
    });
    smStream.write({ url: "/results", changefreq: "weekly", priority: 0.5 });
    smStream.write({ url: "/talents", changefreq: "weekly", priority: 0.5 });
    smStream.write({
      url: "/accountSettings",
      changefreq: "weekly",
      priority: 0.5,
    });
    smStream.write({
      url: "/notification",
      changefreq: "daily",
      priority: 1,
    });
    smStream.write({
      url: "/applicantprofile",
      changefreq: "daily",
      priority: 0.8,
    });
    smStream.write({
      url: "/jobapplication",
      changefreq: "daily",
      priority: 0.7,
    });
    smStream.write({ url: "/jobdetails", changefreq: "daily", priority: 1 });
    smStream.write({ url: "/overview", changefreq: "weekly", priority: 0.8 });
    smStream.write({ url: "/profile", changefreq: "weekly", priority: 0.7 });
    smStream.write({
      url: "/postproject",
      changefreq: "daily",
      priority: 1,
    });
    smStream.write({ url: "/message", changefreq: "weekly", priority: 0.5 });
    smStream.write({ url: "/saved", changefreq: "weekly", priority: 0.5 });
    smStream.write({ url: "/help", changefreq: "weekly", priority: 0.5 });
    smStream.write({ url: "/payment", changefreq: "daily", priority: 0.9 });
    smStream.write({ url: "/terms", changefreq: "weekly", priority: 0.5 });
    smStream.write({ url: "/settings", changefreq: "weekly", priority: 0.5 });

    /* or use
    Readable.from([{url: '/page-1'}...]).pipe(smStream)
    if you are looking to avoid writing your own loop.
    */

    // const dynamicRoutes = getDynamicRoutes(); // Function to fetch dynamic routes
    // dynamicRoutes.forEach((route) => {
    //   smStream.write({
    //     url: route.path,
    //     changefreq: route.changefreq || "daily",
    //     priority: route.priority || 0.7,
    //   });
    // });

    // cache the response
    streamToPromise(pipeline).then((sm) => {
      sitemap = sm;
      smStream.end();
      pipeline.pipe(res).on("error", (e) => {
        throw e;
      });
    });
    // make sure to attach a write stream such as streamToPromise before ending
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`listening to sitemap on port  ${PORT}`);
});
