<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\ProjectDatesRepository")
 */
class ProjectDates
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     * @Groups("project")
     */
    private $starDate;

    /**
     * @ORM\Column(type="date")
     * @Groups("project")
     */
    private $endDate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteProjectDates", mappedBy="projectDates", orphanRemoval=true)
     */
    private $voteProjectDates;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="projectDates")
     * @ORM\JoinColumn(nullable=false)
     */
    private $project;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $vote;

    public function __construct()
    {
        $this->voteProjectDates = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStarDate(): ?\DateTimeInterface
    {
        return $this->starDate;
    }

    public function setStarDate(\DateTimeInterface $starDate): self
    {
        $this->starDate = $starDate;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * @return Collection|VoteProjectDates[]
     */
    public function getVoteProjectDates(): Collection
    {
        return $this->voteProjectDates;
    }

    public function addVoteProjectDate(VoteProjectDates $voteProjectDate): self
    {
        if (!$this->voteProjectDates->contains($voteProjectDate)) {
            $this->voteProjectDates[] = $voteProjectDate;
            $voteProjectDate->setProjectDates($this);
        }

        return $this;
    }

    public function removeVoteProjectDate(VoteProjectDates $voteProjectDate): self
    {
        if ($this->voteProjectDates->contains($voteProjectDate)) {
            $this->voteProjectDates->removeElement($voteProjectDate);
            // set the owning side to null (unless already changed)
            if ($voteProjectDate->getProjectDates() === $this) {
                $voteProjectDate->setProjectDates(null);
            }
        }

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): self
    {
        $this->project = $project;

        return $this;
    }

    public function getVote(): ?int
    {
        return $this->vote;
    }

    public function setVote(?int $vote): self
    {
        $this->vote = $vote;

        return $this;
    }
}
