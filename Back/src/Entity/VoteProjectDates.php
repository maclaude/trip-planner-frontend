<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
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
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="voteProjectDates")
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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
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
