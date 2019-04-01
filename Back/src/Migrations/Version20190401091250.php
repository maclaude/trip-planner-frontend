<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190401091250 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE suggestion_gender (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user_message (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, user_id INT NOT NULL, content LONGTEXT NOT NULL, date DATE NOT NULL, time TIME NOT NULL, INDEX IDX_EEB02E75166D1F9C (project_id), INDEX IDX_EEB02E75A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30) NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, avatar VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE suggestion (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, user_id INT NOT NULL, suggestion_gender_id INT NOT NULL, name VARCHAR(50) NOT NULL, description LONGTEXT NOT NULL, url VARCHAR(255) DEFAULT NULL, price INT NOT NULL, INDEX IDX_DD80F31B166D1F9C (project_id), INDEX IDX_DD80F31BA76ED395 (user_id), INDEX IDX_DD80F31BA38E63E2 (suggestion_gender_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project (id INT AUTO_INCREMENT NOT NULL, owner_id INT NOT NULL, title VARCHAR(50) NOT NULL, description LONGTEXT NOT NULL, destination VARCHAR(50) NOT NULL, INDEX IDX_2FB3D0EE7E3C61F9 (owner_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_user (project_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_B4021E51166D1F9C (project_id), INDEX IDX_B4021E51A76ED395 (user_id), PRIMARY KEY(project_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE project_dates (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, star_date DATE NOT NULL, end_date DATE NOT NULL, INDEX IDX_B821C080166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE vote_suggestion (id INT AUTO_INCREMENT NOT NULL, suggestion_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_36CC89E3A41BB822 (suggestion_id), INDEX IDX_36CC89E3A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE vote_project_dates (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, project_dates_id INT NOT NULL, INDEX IDX_A94C7EC4A76ED395 (user_id), INDEX IDX_A94C7EC4E71918 (project_dates_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_message ADD CONSTRAINT FK_EEB02E75166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE user_message ADD CONSTRAINT FK_EEB02E75A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31B166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31BA38E63E2 FOREIGN KEY (suggestion_gender_id) REFERENCES suggestion_gender (id)');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE7E3C61F9 FOREIGN KEY (owner_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_dates ADD CONSTRAINT FK_B821C080166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE vote_suggestion ADD CONSTRAINT FK_36CC89E3A41BB822 FOREIGN KEY (suggestion_id) REFERENCES suggestion (id)');
        $this->addSql('ALTER TABLE vote_suggestion ADD CONSTRAINT FK_36CC89E3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE vote_project_dates ADD CONSTRAINT FK_A94C7EC4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE vote_project_dates ADD CONSTRAINT FK_A94C7EC4E71918 FOREIGN KEY (project_dates_id) REFERENCES project_dates (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31BA38E63E2');
        $this->addSql('ALTER TABLE user_message DROP FOREIGN KEY FK_EEB02E75A76ED395');
        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31BA76ED395');
        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE7E3C61F9');
        $this->addSql('ALTER TABLE project_user DROP FOREIGN KEY FK_B4021E51A76ED395');
        $this->addSql('ALTER TABLE vote_suggestion DROP FOREIGN KEY FK_36CC89E3A76ED395');
        $this->addSql('ALTER TABLE vote_project_dates DROP FOREIGN KEY FK_A94C7EC4A76ED395');
        $this->addSql('ALTER TABLE vote_suggestion DROP FOREIGN KEY FK_36CC89E3A41BB822');
        $this->addSql('ALTER TABLE user_message DROP FOREIGN KEY FK_EEB02E75166D1F9C');
        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31B166D1F9C');
        $this->addSql('ALTER TABLE project_user DROP FOREIGN KEY FK_B4021E51166D1F9C');
        $this->addSql('ALTER TABLE project_dates DROP FOREIGN KEY FK_B821C080166D1F9C');
        $this->addSql('ALTER TABLE vote_project_dates DROP FOREIGN KEY FK_A94C7EC4E71918');
        $this->addSql('DROP TABLE suggestion_gender');
        $this->addSql('DROP TABLE user_message');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE suggestion');
        $this->addSql('DROP TABLE project');
        $this->addSql('DROP TABLE project_user');
        $this->addSql('DROP TABLE project_dates');
        $this->addSql('DROP TABLE vote_suggestion');
        $this->addSql('DROP TABLE vote_project_dates');
    }
}
