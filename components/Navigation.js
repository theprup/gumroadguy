import { PrismicLink, PrismicText, PrismicRichText } from "@prismicio/react";

export function Navigation({ navigation }) {
  return (
    <div className="top-nav">
      <nav>
        {/* Renders top-level links. */}
        {navigation.data?.slices.map((slice) => {

          return (
            <div className="sub-nav" key={slice.id}>
              <PrismicLink field={slice.primary.link}>
                <PrismicText field={slice.primary.name} />
              </PrismicLink>

              {/* Renders child links, if present. */}
              {/* {slice.items.length > 0 && (
                <ul>
                  {slice.items.map((item) => {
                    return (
                      <li key={JSON.stringify(item)}>
                        <PrismicLink field={item.link}>
                          <PrismicText field={item.name} />
                        </PrismicLink>
                      </li>
                    )
                  })}
                </ul>
              )} */}
            </div>
          );
        })}
      </nav>
      <div className="login">
        <PrismicLink field={navigation?.data.loginlink}>
          <PrismicRichText field={navigation?.data.loginlabel} />
        </PrismicLink>
      </div>
      <div className="signup">
        <PrismicLink field={navigation?.data.signuplink}>
          <PrismicRichText field={navigation?.data.signuplabel} />
        </PrismicLink>
      </div>
    </div>
  );
}
