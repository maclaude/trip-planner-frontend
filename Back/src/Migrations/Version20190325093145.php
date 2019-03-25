<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190325093145 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE vote_project_dates ADD user_id INT NOT NULL, ADD project_dates_id INT NOT NULL');
        $this->addSql('ALTER TABLE vote_project_dates ADD CONSTRAINT FK_A94C7EC4A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE vote_project_dates ADD CONSTRAINT FK_A94C7EC4E71918 FOREIGN KEY (project_dates_id) REFERENCES project_dates (id)');
        $this->addSql('CREATE INDEX IDX_A94C7EC4A76ED395 ON vote_project_dates (user_id)');
        $this->addSql('CREATE INDEX IDX_A94C7EC4E71918 ON vote_project_dates (project_dates_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE vote_project_dates DROP FOREIGN KEY FK_A94C7EC4A76ED395');
        $this->addSql('ALTER TABLE vote_project_dates DROP FOREIGN KEY FK_A94C7EC4E71918');
        $this->addSql('DROP INDEX IDX_A94C7EC4A76ED395 ON vote_project_dates');
        $this->addSql('DROP INDEX IDX_A94C7EC4E71918 ON vote_project_dates');
        $this->addSql('ALTER TABLE vote_project_dates DROP user_id, DROP project_dates_id');
    }
}
