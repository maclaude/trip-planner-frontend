<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190319145137 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE project DROP FOREIGN KEY FK_2FB3D0EE7E3C61F9');
        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31BA76ED395');
        $this->addSql('ALTER TABLE user_message DROP FOREIGN KEY FK_EEB02E75A76ED395');
        $this->addSql('ALTER TABLE user_project DROP FOREIGN KEY FK_77BECEE4A76ED395');
        $this->addSql('ALTER TABLE vote_project_dates DROP FOREIGN KEY FK_A94C7EC4A76ED395');
        $this->addSql('ALTER TABLE vote_suggestion DROP FOREIGN KEY FK_36CC89E3A76ED395');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE user_project');
        $this->addSql('DROP INDEX IDX_DD80F31BA76ED395 ON suggestion');
        $this->addSql('ALTER TABLE suggestion DROP user_id');
        $this->addSql('DROP INDEX IDX_2FB3D0EE7E3C61F9 ON project');
        $this->addSql('ALTER TABLE project DROP owner_id');
        $this->addSql('DROP INDEX IDX_A94C7EC4A76ED395 ON vote_project_dates');
        $this->addSql('ALTER TABLE vote_project_dates DROP user_id');
        $this->addSql('DROP INDEX IDX_EEB02E75A76ED395 ON user_message');
        $this->addSql('ALTER TABLE user_message DROP user_id');
        $this->addSql('DROP INDEX IDX_36CC89E3A76ED395 ON vote_suggestion');
        $this->addSql('ALTER TABLE vote_suggestion DROP user_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, role_id INT NOT NULL, firstname VARCHAR(30) NOT NULL COLLATE utf8mb4_unicode_ci, lastname VARCHAR(50) NOT NULL COLLATE utf8mb4_unicode_ci, email VARCHAR(255) NOT NULL COLLATE utf8mb4_unicode_ci, password VARCHAR(60) NOT NULL COLLATE utf8mb4_unicode_ci, avatar VARCHAR(255) DEFAULT NULL COLLATE utf8mb4_unicode_ci, INDEX IDX_8D93D649D60322AC (role_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE user_project (user_id INT NOT NULL, project_id INT NOT NULL, INDEX IDX_77BECEE4166D1F9C (project_id), INDEX IDX_77BECEE4A76ED395 (user_id), PRIMARY KEY(user_id, project_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('ALTER TABLE user_project ADD CONSTRAINT FK_77BECEE4166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user_project ADD CONSTRAINT FK_77BECEE4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project ADD owner_id INT NOT NULL');
        $this->addSql('ALTER TABLE project ADD CONSTRAINT FK_2FB3D0EE7E3C61F9 FOREIGN KEY (owner_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_2FB3D0EE7E3C61F9 ON project (owner_id)');
        $this->addSql('ALTER TABLE suggestion ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_DD80F31BA76ED395 ON suggestion (user_id)');
        $this->addSql('ALTER TABLE user_message ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE user_message ADD CONSTRAINT FK_EEB02E75A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_EEB02E75A76ED395 ON user_message (user_id)');
        $this->addSql('ALTER TABLE vote_project_dates ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE vote_project_dates ADD CONSTRAINT FK_A94C7EC4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_A94C7EC4A76ED395 ON vote_project_dates (user_id)');
        $this->addSql('ALTER TABLE vote_suggestion ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE vote_suggestion ADD CONSTRAINT FK_36CC89E3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_36CC89E3A76ED395 ON vote_suggestion (user_id)');
    }
}
