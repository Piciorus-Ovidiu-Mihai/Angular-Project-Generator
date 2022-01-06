import { strings } from '@angular-devkit/core';
import { apply, MergeStrategy, mergeWith, move, Rule, SchematicContext, template, Tree, url } from '@angular-devkit/schematics';


// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function overrideAppRoot(_options: any): Rule {
  const name = _options.name;

  return (tree: Tree, _context: SchematicContext) => {
    const moveToPath = `${name}/src/app`;
    const sourceTemplate = url("./files");

    const sourceParametrizeTemplate = apply(sourceTemplate, [
      template({
        ..._options,
        ...strings,
      }),
      move(moveToPath),
    ]);
    tree = mergeWith(sourceParametrizeTemplate, MergeStrategy.Overwrite)(tree, _context) as Tree;

    return tree;
  };
}
