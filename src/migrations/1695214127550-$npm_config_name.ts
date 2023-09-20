import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1695214127550 implements MigrationInterface {
    name = ' $npmConfigName1695214127550'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`student\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`yearStarted\` year NOT NULL, \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`student_exam\` (\`id\` int NOT NULL AUTO_INCREMENT, \`date\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`grade\` int NOT NULL, \`studentId\` int NULL, \`examId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`exam\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`departmentId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`department\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`student_exam\` ADD CONSTRAINT \`FK_fb88bd040857cb2ec8159e685fc\` FOREIGN KEY (\`studentId\`) REFERENCES \`student\`(\`id\`) ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`student_exam\` ADD CONSTRAINT \`FK_edb1e69997bff74a23cc2740f27\` FOREIGN KEY (\`examId\`) REFERENCES \`exam\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`exam\` ADD CONSTRAINT \`FK_33bbe71ccd0c469e4f0639404bc\` FOREIGN KEY (\`departmentId\`) REFERENCES \`department\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`exam\` DROP FOREIGN KEY \`FK_33bbe71ccd0c469e4f0639404bc\``);
        await queryRunner.query(`ALTER TABLE \`student_exam\` DROP FOREIGN KEY \`FK_edb1e69997bff74a23cc2740f27\``);
        await queryRunner.query(`ALTER TABLE \`student_exam\` DROP FOREIGN KEY \`FK_fb88bd040857cb2ec8159e685fc\``);
        await queryRunner.query(`DROP TABLE \`department\``);
        await queryRunner.query(`DROP TABLE \`exam\``);
        await queryRunner.query(`DROP TABLE \`student_exam\``);
        await queryRunner.query(`DROP TABLE \`student\``);
    }

}
