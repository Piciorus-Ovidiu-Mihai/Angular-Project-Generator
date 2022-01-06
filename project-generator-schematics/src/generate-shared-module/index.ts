import { strings } from '@angular-devkit/core';
import { apply, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';


export function generateSharedModule(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src`;
    const sourceTemplate = url("./files");

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate)(tree, _context) as Tree;

    return tree;
  };
}
