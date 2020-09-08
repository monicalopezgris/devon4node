import {
  SchematicTestRunner,
  UnitTestTree,
} from '@angular-devkit/schematics/testing';
import * as path from 'path';

describe('Repository Factory', () => {
  const runner: SchematicTestRunner = new SchematicTestRunner(
    '.',
    path.join(process.cwd(), 'src/collection.json'),
  );
  it('should manage name only', () => {
    const app: object = {
      name: '',
    };
    let tree: UnitTestTree = runner.runSchematic('application', app);
    const options: object = {
      name: 'project',
    };
    tree = runner.runSchematic('repository', options, tree);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/src/app/model/entities/project.entity.ts'),
    ).toBeDefined();
    expect(
      files.find(filename => filename === '/src/app/repositories/project.repository.ts'),
    ).toBeDefined();
    expect(tree.readContent('/src/app/model/entities/project.entity.ts')).toEqual(
      "import { Entity } from 'typeorm';\n" +
      "import { BaseEntity } from '../../../shared/model/entities/base-entity.entity';\n" +
      "\n" +
      "@Entity()\n" +
      "export class Project extends BaseEntity {}\n"
    );
    expect(tree.readContent('/src/app/repositories/project.repository.ts')).toEqual(
      "import { Project } from '../model/entities/project.entity';\n" +
      "import { Repository, EntityRepository } from 'typeorm';\n" +
      "\n" +
      "@EntityRepository(Project)\n" +
      "export class ProjectRepository extends Repository<Project> {}\n"
    );
  });
  it('should manage name and path', () => {
    const app: object = {
      name: 'app',
    };
    let tree: UnitTestTree = runner.runSchematic('application', app);
    const options: object = {
      name: 'project',
      path: 'app'
    };
    tree = runner.runSchematic('repository', options, tree);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/app/src/app/model/entities/project.entity.ts'),
    ).toBeDefined();
    expect(
      files.find(filename => filename === '/app/src/app/repositories/project.repository.ts'),
    ).toBeDefined();
  });
  it('should manage name to dasherize', () => {
    const app: object = {
      name: '',
    };
    let tree: UnitTestTree = runner.runSchematic('application', app);
    const options: object = {
      name: 'fooBar',
    };
    tree = runner.runSchematic('repository', options, tree);
    const files: string[] = tree.files;
    expect(
      files.find(filename => filename === '/src/app/model/entities/foo-bar.entity.ts'),
    ).toBeDefined();
    expect(
      files.find(filename => filename === '/src/app/repositories/foo-bar.repository.ts'),
    ).toBeDefined();
  });
});