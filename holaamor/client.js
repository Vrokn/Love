// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";
function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot("lovetest", {
      /* initial props */
    }),
    r360.getDefaultSurface()
    /*     new Surface(4680, 1200, Surface.SurfaceShape.Cylinder)
     */
  );
  const s = r360.getDefaultSurface();
  s.setShape(Surface.SurfaceShape.Cylinder);
  s.resize(4096, 1080);
  // Load the initial environment
  r360.compositor.setBackground(
    r360.getAssetURL("30026348064_58410ce1fe_o.jpg")
  );
}

window.React360 = { init };
