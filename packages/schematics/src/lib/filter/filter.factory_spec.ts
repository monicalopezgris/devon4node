import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as path from 'path';

describe('Filter Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json'),
  );

  it('should manage name only', () => {
    const options: object = {
      name: 'filter',
    };
    const tree: UnitTestTree = runner.runSchematic('filter', options);
    const files: string[] = tree.files;
    expect(files.find(filename => filename === '/app/filter.filter.ts')).toBeDefined();
    expect(tree.readContent('/app/filter.filter.ts')).toEqual(
      "import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';\n" +
      '\n' +
      '@Catch()\n' +
      'export class FilterFilter<T> implements ExceptionFilter {\n' +
      '  catch(exception: T, host: ArgumentsHost) {}\n' +
      '}\n',
    );
  });
  it('should manage name has a path', () => {
    const options: object = {
      name: 'bar/filter',
    };
    const tree: UnitTestTree = runner.runSchematic('filter', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/bar/filter.filter.ts'),
    ).toBeDefined();
    expect(tree.readContent('/app/bar/filter.filter.ts')).toEqual(
      "import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';\n" +
      '\n' +
      '@Catch()\n' +
      'export class FilterFilter<T> implements ExceptionFilter {\n' +
      '  catch(exception: T, host: ArgumentsHost) {}\n' +
      '}\n',
    );
  });
  it('should manage name and path', () => {
    const options: object = {
      name: 'filter',
      path: 'baz',
    };
    const tree: UnitTestTree = runner.runSchematic('filter', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/baz/src/app/filters/filter.filter.ts'),
    ).toBeDefined();
    expect(tree.readContent('/baz/src/app/filters/filter.filter.ts')).toEqual(
      "import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';\n" +
      '\n' +
      '@Catch()\n' +
      'export class FilterFilter<T> implements ExceptionFilter {\n' +
      '  catch(exception: T, host: ArgumentsHost) {}\n' +
      '}\n',
    );
  });
  it('should manage name to dasherize', () => {
    const options: object = {
      name: 'filterBar',
    };
    const tree: UnitTestTree = runner.runSchematic('filter', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/filter-bar.filter.ts'),
    ).toBeDefined();
    expect(tree.readContent('/app/filter-bar.filter.ts')).toEqual(
      "import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';\n" +
      '\n' +
      '@Catch()\n' +
      'export class FilterBarFilter<T> implements ExceptionFilter {\n' +
      '  catch(exception: T, host: ArgumentsHost) {}\n' +
      '}\n',
    );
  });
  it('should manage path to dasherize', () => {
    const options: object = {
      name: 'barBaz/filter',
    };
    const tree: UnitTestTree = runner.runSchematic('filter', options);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/bar-baz/filter.filter.ts'),
    ).toBeDefined();
    expect(tree.readContent('/app/bar-baz/filter.filter.ts')).toEqual(
      "import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';\n" +
      '\n' +
      '@Catch()\n' +
      'export class FilterFilter<T> implements ExceptionFilter {\n' +
      '  catch(exception: T, host: ArgumentsHost) {}\n' +
      '}\n',
    );
  });
  it('should manage javascript file', () => {
    const options: object = {
      name: 'filter',
      language: 'js',
    };
    const tree: UnitTestTree = runner.runSchematic('filter', options);
    const files: string[] = tree.files;
    expect(files.find(filename => filename === '/app/filter.filter.js')).toBeDefined();
    expect(tree.readContent('/app/filter.filter.js')).toEqual(
      "import { Catch } from '@nestjs/common';\n" +
      '\n' +
      '@Catch()\n' +
      'export class FilterFilter {\n' +
      '  catch(exception, host) {}\n' +
      '}\n',
    );
  });
  it('should add source root to path', () => {
    const options: object = {
      name: 'filter',
      sourceRoot: 'sourceroot'
    };
    let tree: UnitTestTree = runner.runSchematic('application', { name: '' });
    tree = runner.runSchematic('filter', options, tree);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/sourceroot/app/filter.filter.ts'),
    ).toBeDefined();
    expect(tree.readContent('/sourceroot/app/filter.filter.ts')).toEqual(
      "import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';\n" +
      '\n' +
      '@Catch()\n' +
      'export class FilterFilter<T> implements ExceptionFilter {\n' +
      '  catch(exception: T, host: ArgumentsHost) {}\n' +
      '}\n',
    );
  });
});