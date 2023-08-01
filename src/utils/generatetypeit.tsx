import TypeIt from "typeit-react";

export function generateTypeIt() {
  return (
    <div>
      <TypeIt
        getBeforeInit={(instance) => {
          instance
            .type("Error 404 ")
            .pause(750)
            .delete(10)
            .pause(500)
            .type("Gabriel Freitas ");
          return instance;
        }}
      />
    </div>
  );
}

