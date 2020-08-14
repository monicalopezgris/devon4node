// import {
//   SchematicTestRunner,
//   UnitTestTree,
// } from '@angular-devkit/schematics/testing';
// import * as path from 'path';

// describe('Interceptor Factory', () => {
//   const runner: SchematicTestRunner = new SchematicTestRunner(
//     '.',
//     path.join(process.cwd(), 'src/collection.json'),
//   );
//   it('should manage name only and create spec file', () => {
//     const options: object = {
//       name: 'foo',
//     };
//     const tree: UnitTestTree = runner.runSchematic('interceptor', options);
//     const files: string[] = tree.files;
//     expect(
//       files.find(filename => filename === '/app/foo.interceptor.ts'),
//     ).toBeDefined();
//     expect(
//       files.find(filename => filename === '/app/foo.interceptor.spec.ts'),
//     ).toBeDefined();
//     expect(tree.readContent('/app/foo.interceptor.ts')).toEqual(
//       "import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';\n" +
//       "import { Observable } from 'rxjs';\n" +
//       '\n' +
//       '@Injectable()\n' +
//       'export class FooInterceptor implements NestInterceptor {\n' +
//       '  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n' +
//       '    return next.handle();\n' +
//       '  }\n' +
//       '}\n',
//     );
//   });
//   it('should manage name as a path', () => {
//     const options: object = {
//       name: 'bar/foo',
//     };
//     const tree: UnitTestTree = runner.runSchematic('interceptor', options);
//     const files: string[] = tree.files;
//     expect(
//       files.find(filename => filename === '/app/bar/foo.interceptor.ts'),
//     ).toBeDefined();
//     expect(tree.readContent('/app/bar/foo.interceptor.ts')).toEqual(
//       "import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';\n" +
//       "import { Observable } from 'rxjs';\n" +
//       '\n' +
//       '@Injectable()\n' +
//       'export class FooInterceptor implements NestInterceptor {\n' +
//       '  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n' +
//       '    return next.handle();\n' +
//       '  }\n' +
//       '}\n',
//     );
//   });
//   it('should manage name and path', () => {
//     const options: object = {
//       name: 'foo',
//       path: 'baz',
//     };
//     const tree: UnitTestTree = runner.runSchematic('interceptor', options);
//     const files: string[] = tree.files;
//     expect(
//       files.find(filename => filename === '/baz/src/app/interceptors/foo.interceptor.ts'),
//     ).toBeDefined();
//     expect(tree.readContent('/baz/src/app/interceptors/foo.interceptor.ts')).toEqual(
//       "import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';\n" +
//       "import { Observable } from 'rxjs';\n" +
//       '\n' +
//       '@Injectable()\n' +
//       'export class FooInterceptor implements NestInterceptor {\n' +
//       '  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n' +
//       '    return next.handle();\n' +
//       '  }\n' +
//       '}\n',
//     );
//   });
//   it('should manage name to dasherize', () => {
//     const options: object = {
//       name: 'fooBar',
//     };
//     const tree: UnitTestTree = runner.runSchematic('interceptor', options);
//     const files: string[] = tree.files;
//     expect(
//       files.find(filename => filename === '/app/foo-bar.interceptor.ts'),
//     ).toBeDefined();
//     expect(tree.readContent('/app/foo-bar.interceptor.ts')).toEqual(
//       "import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';\n" +
//       "import { Observable } from 'rxjs';\n" +
//       '\n' +
//       '@Injectable()\n' +
//       'export class FooBarInterceptor implements NestInterceptor {\n' +
//       '  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n' +
//       '    return next.handle();\n' +
//       '  }\n' +
//       '}\n',
//     );
//   });
//   it('should manage path to dasherize', () => {
//     const options: object = {
//       name: 'barBaz/foo',
//     };
//     const tree: UnitTestTree = runner.runSchematic('interceptor', options);
//     const files: string[] = tree.files;
//     expect(
//       files.find(filename => filename === '/app/bar-baz/foo.interceptor.ts'),
//     ).toBeDefined();
//     expect(tree.readContent('/app/bar-baz/foo.interceptor.ts')).toEqual(
//       "import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';\n" +
//       "import { Observable } from 'rxjs';\n" +
//       '\n' +
//       '@Injectable()\n' +
//       'export class FooInterceptor implements NestInterceptor {\n' +
//       '  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {\n' +
//       '    return next.handle();\n' +
//       '  }\n' +
//       '}\n',
//     );
//   });
// });