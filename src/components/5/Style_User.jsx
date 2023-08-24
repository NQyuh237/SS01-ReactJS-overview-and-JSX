import React from "react";

export default function Style_User() {
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n            .container{\n                display: flex;\n                 align-items: center;\n                justify-content: center;\n                 min-height: 100vh;\n            }\n        ",
        }}
      />
    </>
  );
}
