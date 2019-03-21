<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190319150854 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE project_user (project_id INT NOT NULL, user_id INT NOT NULL, INDEX IDX_B4021E51166D1F9C (project_id), INDEX IDX_B4021E51A76ED395 (user_id), PRIMARY KEY(project_id, user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51166D1F9C FOREIGN KEY (project_id) REFERENCES project (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE project_user ADD CONSTRAINT FK_B4021E51A76ED395 FOREIGN KEY (user_id) REFERENCES user (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE suggestion ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_DD80F31BA76ED395 ON suggestion (user_id)');
        $this->addSql('ALTER TABLE user CHANGE role_id role_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user_message ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE user_message ADD CONSTRAINT FK_EEB02E75A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_EEB02E75A76ED395 ON user_message (user_id)');
        $this->addSql('ALTER TABLE vote_suggestion ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE vote_suggestion ADD CONSTRAINT FK_36CC89E3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_36CC89E3A76ED395 ON vote_suggestion (user_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE project_user');
        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31BA76ED395');
        $this->addSql('DROP INDEX IDX_DD80F31BA76ED395 ON suggestion');
        $this->addSql('ALTER TABLE suggestion DROP user_id');
        $this->addSql('ALTER TABLE user CHANGE role_id role_id INT NOT NULL');
        $this->addSql('ALTER TABLE user_message DROP FOREIGN KEY FK_EEB02E75A76ED395');
        $this->addSql('DROP INDEX IDX_EEB02E75A76ED395 ON user_message');
        $this->addSql('ALTER TABLE user_message DROP user_id');
        $this->addSql('ALTER TABLE vote_suggestion DROP FOREIGN KEY FK_36CC89E3A76ED395');
        $this->addSql('DROP INDEX IDX_36CC89E3A76ED395 ON vote_suggestion');
        $this->addSql('ALTER TABLE vote_suggestion DROP user_id');
    }
}
