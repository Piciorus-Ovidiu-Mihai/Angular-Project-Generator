import { strings } from "@angular-devkit/core";
import {
  apply,
  chain,
  externalSchematic,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from "@angular-devkit/schematics";

export function projectGeneratorSchematics(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const rule = chain([
      createProject(name),
      generateArhitecture(_options),
      updatePackageJson(name),
    ]);
    return rule(tree, _context) as Rule;
  };
}

function createProject(name: string): Rule {
  return externalSchematic("@schematics/angular", "ng-new", {
    name,
    version: "12.0.0",
    directory: name,
    routing: false,
    style: "scss",
    inlineStyle: false,
    inlineTemplate: false,
  });
}

function generateArhitecture(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${_options.name}/src/app`;

    const sourceTemplate = url("./files");
    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;
    console.log(moveToPath);
    return tree;
  };
}

function updatePackageJson(name: string): Rule {
  return (tree: Tree, _: SchematicContext): Tree => {
    const path = `/${name}/package.json`;
    const file = tree.read(path);
    const json = JSON.parse(file!.toString());

    json.scripts = {
      ...json.scripts,
      "build:prod": "ng build --prod",
      test: "ng test --code-coverage",
      lint: "ng lint --fix",
    };

    json.husky = {
      hooks: {
        "pre-commit":
          'pretty-quick --staged --pattern "apps/**/**/*.{ts,scss,html}"',
      },
    };

    json.devDependencies.prettier = "^2.0.0";
    json.devDependencies.husky = "^4.2";

    tree.overwrite(path, JSON.stringify(json, null, 2));
    return tree;
  };
}
