import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as path from 'path';

describe('Entity Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json'),
  );
  it('should manage name only', () => {
    const options: object = {
      name: 'foo',
    };
    const tree: UnitTestTree = runner.runSchematic('entity', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/src/app/model/entities/foo.entity.ts'),
    ).toBeDefined();
  });
  it('should manage name and path', () => {
    const options: object = {
      name: 'foo',
      path: 'bar',
    };
    const tree: UnitTestTree = runner.runSchematic('entity', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/bar/src/app/model/entities/foo.entity.ts'),
    ).toBeDefined();
  });
  it('should manage name to dasherize', () => {
    const options: object = {
      name: 'fooBar',
    };
    const tree: UnitTestTree = runner.runSchematic('entity', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/src/app/model/entities/foo-bar.entity.ts'),
    ).toBeDefined();
  });
  it('should manage module/name', () => {
    const options: object = {
      name: 'foo/bar',
    };
    const tree: UnitTestTree = runner.runSchematic('entity', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/src/app/foo/model/entities/bar.entity.ts'),
    ).toBeDefined();
  });
});