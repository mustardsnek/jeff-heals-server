"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");

// component-blocks.tsx
var import_component_blocks = require("@keystone-6/fields-document/component-blocks");
var import_vesslio_storybook = require("@mustardsnek/vesslio-storybook");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
var componentBlocks = {
  hero: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this);
    },
    label: "Hero",
    schema: {
      image: import_component_blocks.fields.object({
        src: import_component_blocks.fields.text({ label: "Image source" }),
        class: import_component_blocks.fields.text({ label: "Image class" })
      }),
      title: import_component_blocks.fields.object({
        string: import_component_blocks.fields.text({ label: "Hero title" }),
        class: import_component_blocks.fields.text({ label: "Hero title class" }),
        enunciation: import_component_blocks.fields.text({ label: "Enunciation" })
      }),
      copy: import_component_blocks.fields.text({ label: "Copy" }),
      bg: import_component_blocks.fields.object({
        parent: import_component_blocks.fields.text({ label: "Background Class" }),
        children: import_component_blocks.fields.array(import_component_blocks.fields.text({ label: "Child class" }))
      }),
      textbg: import_component_blocks.fields.text({ label: "Text Background" }),
      textclass: import_component_blocks.fields.text({ label: "Text Class" }),
      links: import_component_blocks.fields.array(
        import_component_blocks.fields.object({
          link: import_component_blocks.fields.text({ label: "link" }),
          description: import_component_blocks.fields.text({ label: "description" }),
          class: import_component_blocks.fields.text({ label: "class" })
        })
      )
    }
  }),
  cta: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_vesslio_storybook.CTA, {}, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 50,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this);
    },
    label: "CTA",
    schema: {}
  }),
  postCarousel: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 59,
        columnNumber: 14
      }, this);
    },
    label: "Post Carousel",
    schema: {
      preview: import_component_blocks.fields.checkbox({ label: "Preview image" }),
      detailed: import_component_blocks.fields.checkbox({ label: "Detailed post" })
    }
  }),
  suggestions: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 69,
        columnNumber: 14
      }, this);
    },
    label: "Suggestions",
    schema: {}
  }),
  storyCarousel: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 76,
        columnNumber: 14
      }, this);
    },
    label: "Story Carousel",
    schema: {
      preview: import_component_blocks.fields.checkbox({ label: "Preview image" }),
      intro: import_component_blocks.fields.text({ label: "Introduction" })
    }
  }),
  intake: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 86,
        columnNumber: 14
      }, this);
    },
    label: "Intake",
    schema: {
      questions: import_component_blocks.fields.array(
        import_component_blocks.fields.object({
          question: import_component_blocks.fields.text({ label: "Question" }),
          description: import_component_blocks.fields.text({ label: "Description" }),
          answers: import_component_blocks.fields.array(
            import_component_blocks.fields.object({
              answer: import_component_blocks.fields.text({ label: "Answer" })
            })
          )
        })
      )
    }
  }),
  faq: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 105,
        columnNumber: 14
      }, this);
    },
    label: "FAQ",
    schema: {
      questions: import_component_blocks.fields.array(
        import_component_blocks.fields.object({
          question: import_component_blocks.fields.text({ label: "Question" }),
          answers: import_component_blocks.fields.array(
            import_component_blocks.fields.object({
              answer: import_component_blocks.fields.text({ label: "Answer" })
            })
          )
        })
      )
    }
  }),
  postCardPane: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: props.fields.intro.element }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 123,
        columnNumber: 14
      }, this);
    },
    label: "Post Card Pane",
    schema: {
      intro: import_component_blocks.fields.child({
        kind: "block",
        placeholder: "Introduction",
        formatting: { inlineMarks: "inherit", softBreaks: "inherit" }
      }),
      vertical: import_component_blocks.fields.checkbox({ label: "Vertical layout" })
    }
  }),
  numberCardPane: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: props.fields.intro.element }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 137,
        columnNumber: 14
      }, this);
    },
    label: "Number Card Pane",
    schema: {
      intro: import_component_blocks.fields.child({
        kind: "block",
        placeholder: "Introduction",
        formatting: { inlineMarks: "inherit", softBreaks: "inherit" }
      }),
      vertical: import_component_blocks.fields.checkbox({ label: "Vertical layout" }),
      cards: import_component_blocks.fields.array(
        import_component_blocks.fields.object({
          title: import_component_blocks.fields.text({ label: "Title" }),
          copy: import_component_blocks.fields.text({ label: "Copy" }),
          number: import_component_blocks.fields.integer({ label: "Number" })
        })
      )
    }
  }),
  cardFilterer: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 158,
        columnNumber: 14
      }, this);
    },
    label: "Card Filterer",
    schema: {}
  }),
  mixPostSimilar: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 165,
        columnNumber: 14
      }, this);
    },
    label: "Post + Similar Pane",
    schema: {}
  }),
  postHero: (0, import_component_blocks.component)({
    preview: (props) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_component_blocks.NotEditable, { children: "-" }, void 0, false, {
        fileName: "component-blocks.tsx",
        lineNumber: 172,
        columnNumber: 14
      }, this);
    },
    label: "Post Hero",
    schema: {}
  })
};

// schema.ts
var import_fields = require("@keystone-6/core/fields");
var import_fields_document = require("@keystone-6/fields-document");
function buildSlug(input) {
  if (input) {
    return input.trim().toLowerCase().replace(/[^\w ]+/g, "").replace(/ +/g, "-");
  }
}
var isAdmin = ({ session: session2 }) => session2?.data.isAdmin;
var filterPosts = ({ session: session2 }) => {
  if (session2?.data.isAdmin)
    return true;
  return {};
};
var lists = {
  User: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      isAdmin: (0, import_fields.checkbox)(),
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique"
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } }),
      posts: (0, import_fields.relationship)({ ref: "Post.author", many: true }),
      pfp: (0, import_fields.text)(),
      createdAt: (0, import_fields.timestamp)({
        defaultValue: { kind: "now" }
      })
    }
  }),
  Page: (0, import_core.list)({
    access: {
      operation: {
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
        query: import_access.allowAll
      },
      filter: {
        query: filterPosts
      }
    },
    fields: {
      title: (0, import_fields.text)({
        isIndexed: "unique",
        validation: { isRequired: true }
      }),
      content: (0, import_fields_document.document)({
        formatting: true,
        links: true,
        dividers: true,
        ui: {
          views: "./component-blocks"
        },
        componentBlocks
      })
    }
  }),
  Post: (0, import_core.list)({
    access: {
      operation: {
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin,
        query: import_access.allowAll
      },
      filter: {
        query: filterPosts
      }
    },
    fields: {
      title: (0, import_fields.text)({
        validation: { isRequired: true },
        defaultValue: "",
        db: {
          isNullable: false
        }
      }),
      slug: (0, import_fields.text)({
        isIndexed: "unique",
        hooks: {
          resolveInput: ({ operation, resolvedData, inputData }) => {
            if (operation === "create" && !inputData.slug) {
              return buildSlug(inputData.title);
            }
            return resolvedData.slug;
          }
        }
      }),
      isPublished: (0, import_fields.checkbox)(),
      publishDate: (0, import_fields.timestamp)(),
      headerImage: (0, import_fields.text)(),
      content: (0, import_fields_document.document)({
        formatting: true,
        layouts: [
          [1, 1],
          [1, 1, 1],
          [2, 1],
          [1, 2],
          [1, 2, 1]
        ],
        links: true,
        dividers: true,
        ui: {
          views: "./component-blocks"
        },
        componentBlocks
      }),
      story: (0, import_fields.checkbox)(),
      author: (0, import_fields.relationship)({
        ref: "User.posts",
        ui: {
          displayMode: "cards",
          cardFields: ["name", "email"],
          inlineEdit: { fields: ["name", "email"] },
          linkToItem: true,
          inlineConnect: true
        },
        many: false
      }),
      tags: (0, import_fields.relationship)({
        ref: "Tag.posts",
        many: true,
        ui: {
          displayMode: "cards",
          cardFields: ["name"],
          inlineEdit: { fields: ["name"] },
          linkToItem: true,
          inlineConnect: true,
          inlineCreate: { fields: ["name"] }
        }
      })
    }
  }),
  Tag: (0, import_core.list)({
    access: import_access.allowAll,
    fields: {
      name: (0, import_fields.text)(),
      slug: (0, import_fields.text)({
        hooks: {
          resolveInput: ({ operation, resolvedData, inputData }) => {
            if (operation === "create" && !inputData.slug) {
              return buildSlug(inputData.name);
            }
            return resolvedData.slug;
          }
        }
      }),
      posts: (0, import_fields.relationship)({ ref: "Post.tags", many: true })
    }
  })
};

// secrets.ts
var pwd = "bugheavenlube1!";
var uid = "postgres";
var db = "localhost:5432/jeff-heals";

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_crypto = require("crypto");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name createdAt isAdmin",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var keystone_default = withAuth(
  (0, import_core2.config)({
    db: {
      provider: "postgresql",
      url: `postgres://${uid}:${pwd}@${db}`,
      enableLogging: true,
      useMigrations: true
    },
    server: {
      cors: { origin: ["http://localhost:3001"], credentials: true },
      port: 3e3,
      maxFileSize: 200 * 1024 * 1024,
      healthCheck: true
    },
    lists,
    session
  })
);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
