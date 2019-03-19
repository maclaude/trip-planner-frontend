<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\VoteProjectDatesRepository")
 */
class VoteProjectDates
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\user", inversedBy="voteProjectDates")
     * @ORM\JoinColumn(nullable=false)
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\ProjectDates", inversedBy="voteProjectDates")
     * @ORM\JoinColumn(nullable=false)
     */
    private $projectDates;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?user
    {
        return $this->user;
    }

    public function setUser(?user $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getProjectDates(): ?ProjectDates
    {
        return $this->projectDates;
    }

    public function setProjectDates(?ProjectDates $projectDates): self
    {
        $this->projectDates = $projectDates;

        return $this;
    }
}
