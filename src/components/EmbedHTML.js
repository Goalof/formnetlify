import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
<form class="email-form" name="newsletter" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <div hidden aria-hidden="true">
    <label>
      Don’t fill this out if you're human: 
      <input name="bot-field" />
    </label>
  </div>
  <label for="email">Your email address</label>
  <div>
    <input type="email" name="email" placeholder="Email" id="email" required />
    <button type="submit">Subscribe</button>
  </div>
</form> 
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});