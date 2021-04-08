import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<script place={"endOfBody"} rawKey={"606f8f78c3dd5602827a37dd"}>
				{"const processForm = form => {\n  const data = new FormData(form)\n  data.append('form-name', 'newsletter');\n  fetch('/', {\n    method: 'POST',\n    body: data,\n  })\n  .then(() => {\n    form.innerHTML = `<div class=\"form--success\">Almost there! Check your inbox for a confirmation e-mail.</div>`;\n  })\n  .catch(error => {\n    form.innerHTML = `<div class=\"form--error\">Error: ${error}</div>`;\n  })\n}"}
			</script>
		</RawHtml>
	</Theme>;
});