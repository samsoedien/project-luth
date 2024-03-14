// "use client";

import React from "react";
// const RemoteApp = lazy(() => import("remote/RemoteApp"));

// const ReactRemoteComponent = dynamic(() => import("remote/Nav"), {
//   ssr: false,
// });

export function RemotePage(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-white">Page to test Module federation</h1>
      {/* <ReactRemoteComponent /> */}
    </main>
  );
}
export default RemotePage;
