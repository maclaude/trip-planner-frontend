<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190319124001 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE suggestion ADD user_id INT NOT NULL, ADD project_id INT NOT NULL, ADD suggestion_gender_id INT NOT NULL');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31BA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31B166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31BA38E63E2 FOREIGN KEY (suggestion_gender_id) REFERENCES suggestion_gender (id)');
        $this->addSql('CREATE INDEX IDX_DD80F31BA76ED395 ON suggestion (user_id)');
        $this->addSql('CREATE INDEX IDX_DD80F31B166D1F9C ON suggestion (project_id)');
        $this->addSql('CREATE INDEX IDX_DD80F31BA38E63E2 ON suggestion (suggestion_gender_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31BA76ED395');
        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31B166D1F9C');
        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31BA38E63E2');
        $this->addSql('DROP INDEX IDX_DD80F31BA76ED395 ON suggestion');
        $this->addSql('DROP INDEX IDX_DD80F31B166D1F9C ON suggestion');
        $this->addSql('DROP INDEX IDX_DD80F31BA38E63E2 ON suggestion');
        $this->addSql('ALTER TABLE suggestion DROP user_id, DROP project_id, DROP suggestion_gender_id');
    }
}
