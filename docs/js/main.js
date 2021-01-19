window.onload = function () {
    var url = new URL(window.location.href).searchParams;
    var page = "welcome";
    switch (url.get("page")) {
        case "install":
            page = "install";
            break;
        case "components":
            page = "components";
            break;
        case "components_tables":
            page = "components_tables";
            break;
        case "components_inputs":
            page = "components_inputs";
            break;
        case "components_inputs_text":
            page = "components_inputs_text";
            break;
        case "components_inputs_radio":
            page = "components_inputs_radio";
            break;
        case "components_inputs_checkbox":
            page = "components_inputs_checkbox";
            break;
        default:
            page = "welcome";
            break;
    }
    var pages = [
        ["Welcome", "welcome", null],
        ["Installation", "install", null],
        ["Components", "components", [
                ["Tables", "_tables", null],
                ["Inputs", "_inputs", [
                        ["Text", "_text", null],
                        ["Radio", "_radio", null],
                        ["Checkbox", "_checkbox", null]
                    ]]
            ]]
    ];
    var f = function (txt, href, style) {
        if (href == page) {
            style += "-active";
        }
        var c = new NoshiCE({
            tag: "a",
            target: "_self",
            href: "index.html?page=" + href,
            text: txt,
            "class": style
        }).tag;
        return c;
    };
    for (var i = 0; i < pages.length; i++) {
        var href = pages[i][1].toString();
        _("body-left").appendChild(f(pages[i][0].toString(), href, "body-left-head-a"));
        if (pages[i][2] !== null) {
            for (var j = 0; j < pages[i][2].length; j++) {
                var hrefs = href + pages[i][2][j][1].toString();
                _("body-left").appendChild(f(pages[i][2][j][0].toString(), hrefs, "body-left-sub-a"));
                if (pages[i][2][j][2] !== null) {
                    for (var k = 0; k < pages[i][2][j][2].length; k++) {
                        var hrefb = hrefs + pages[i][2][j][2][k][1].toString();
                        _("body-left").appendChild(f(pages[i][2][j][2][k][0].toString(), hrefb, "body-left-branch-a"));
                    }
                }
            }
        }
    }
};
