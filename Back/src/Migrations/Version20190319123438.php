<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190319123438 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE vote_suggestion ADD user_id INT NOT NULL, ADD suggestion_id INT NOT NULL');
        $this->addSql('ALTER TABLE vote_suggestion ADD CONSTRAINT FK_36CC89E3A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE vote_suggestion ADD CONSTRAINT FK_36CC89E3A41BB822 FOREIGN KEY (suggestion_id) REFERENCES suggestion (id)');
        $this->addSql('CREATE INDEX IDX_36CC89E3A76ED395 ON vote_suggestion (user_id)');
        $this->addSql('CREATE INDEX IDX_36CC89E3A41BB822 ON vote_suggestion (suggestion_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE vote_suggestion DROP FOREIGN KEY FK_36CC89E3A76ED395');
        $this->addSql('ALTER TABLE vote_suggestion DROP FOREIGN KEY FK_36CC89E3A41BB822');
        $this->addSql('DROP INDEX IDX_36CC89E3A76ED395 ON vote_suggestion');
        $this->addSql('DROP INDEX IDX_36CC89E3A41BB822 ON vote_suggestion');
        $this->addSql('ALTER TABLE vote_suggestion DROP user_id, DROP suggestion_id');
    }
}
