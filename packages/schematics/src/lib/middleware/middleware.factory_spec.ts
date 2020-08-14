import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
import * as path from 'path';

describe('Middleware Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json'),
  );
  it('should manage name only and create spec file', () => {
    const options: object = {
      name: 'foo',
    };
    const tree: UnitTestTree = runner.runSchematic('middleware', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/foo.middleware.ts'),
    ).toBeDefined();
    expect(
      files.find(filename => filename === '/app/foo.middleware.spec.ts'),
    ).toBeDefined();
    expect(tree.readContent('/app/foo.middleware.ts')).toEqual(
      "import { Injectable, NestMiddleware } from '@nestjs/common';\n" +
      '\n' +
      '@Injectable()\n' +
      'export class FooMiddleware implements NestMiddleware {\n' +
      '  use(req: any, res: any, next: () => void) {\n' +
      '    next();\n' +
      '  }\n' +
      '}\n',
    );
  });
  it('should manage name as a path', () => {
    const options: object = {
      name: 'bar/foo',
      flat: false,
    };
    const tree: UnitTestTree = runner.runSchematic('middleware', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/bar/foo/foo.middleware.ts'),
    ).toBeDefined();
    expect(tree.readContent('/app/bar/foo/foo.middleware.ts')).toEqual(
      "import { Injectable, NestMiddleware } from '@nestjs/common';\n" +
      '\n' +
      '@Injectable()\n' +
      'export class FooMiddleware implements NestMiddleware {\n' +
      '  use(req: any, res: any, next: () => void) {\n' +
      '    next();\n' +
      '  }\n' +
      '}\n',
    );
  });
  it('should manage name and path', () => {
    const options: object = {
      name: 'foo',
      path: 'baz',
      flat: false,
    };
    const tree: UnitTestTree = runner.runSchematic('middleware', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/baz/src/app/foo/foo.middleware.ts'),
    ).toBeDefined();
    expect(tree.readContent('/baz/src/app/foo/foo.middleware.ts')).toEqual(
      "import { Injectable, NestMiddleware } from '@nestjs/common';\n" +
      '\n' +
      '@Injectable()\n' +
      'export class FooMiddleware implements NestMiddleware {\n' +
      '  use(req: any, res: any, next: () => void) {\n' +
      '    next();\n' +
      '  }\n' +
      '}\n',
    );
  });
  it('should manage name to dasherize', () => {
    const options: object = {
      name: 'fooBar',
      flat: false,
    };
    const tree: UnitTestTree = runner.runSchematic('middleware', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/foo-bar/foo-bar.middleware.ts'),
    ).toBeDefined();
    expect(tree.readContent('/app/foo-bar/foo-bar.middleware.ts')).toEqual(
      "import { Injectable, NestMiddleware } from '@nestjs/common';\n" +
      '\n' +
      '@Injectable()\n' +
      'export class FooBarMiddleware implements NestMiddleware {\n' +
      '  use(req: any, res: any, next: () => void) {\n' +
      '    next();\n' +
      '  }\n' +
      '}\n',
    );
  });
  it('should manage path to dasherize', () => {
    const options: object = {
      name: 'barBaz/foo',
      flat: false,
    };
    const tree: UnitTestTree = runner.runSchematic('middleware', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/bar-baz/foo/foo.middleware.ts'),
    ).toBeDefined();
    expect(tree.readContent('/app/bar-baz/foo/foo.middleware.ts')).toEqual(
      "import { Injectable, NestMiddleware } from '@nestjs/common';\n" +
      '\n' +
      '@Injectable()\n' +
      'export class FooMiddleware implements NestMiddleware {\n' +
      '  use(req: any, res: any, next: () => void) {\n' +
      '    next();\n' +
      '  }\n' +
      '}\n',
    );
  });
});