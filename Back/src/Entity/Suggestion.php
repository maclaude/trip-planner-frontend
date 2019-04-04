<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(normalizationContext={"groups"={"suggestion"}})
 * @ORM\Entity(repositoryClass="App\Repository\SuggestionRepository")
 */
class Suggestion
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("project")
     * @Groups("suggestion")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups("project")
     * @Groups("suggestion")
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups("project")
     * @Groups("suggestion")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("project")
     * @Groups("suggestion")
     */
    private $url;

    /**
     * @ORM\Column(type="integer")
     * @Groups("project")
     * @Groups("suggestion")
     */
    private $price;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Project", inversedBy="suggestions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("suggestion")
     */
    private $project;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="suggestions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("project")
     * @Groups("suggestion")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\SuggestionGender", inversedBy="suggestions")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("suggestion")
     */
    private $suggestionGender;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteSuggestion", mappedBy="suggestion", orphanRemoval=true)
     */
    private $voteSuggestions;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups("project")
     * @Groups("suggestion")
     */
    private $vote = 0;

    public function __construct()
    {
        $this->voteSuggestions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(?string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getSuggestionGender(): ?SuggestionGender
    {
        return $this->suggestionGender;
    }

    public function setSuggestionGender(?SuggestionGender $suggestionGender): self
    {
        $this->suggestionGender = $suggestionGender;

        return $this;
    }

    /**
     * @return Collection|VoteSuggestion[]
     */
    public function getVoteSuggestions(): Collection
    {
        return $this->voteSuggestions;
    }

    public function addVoteSuggestion(VoteSuggestion $voteSuggestion): self
    {
        if (!$this->voteSuggestions->contains($voteSuggestion)) {
            $this->voteSuggestions[] = $voteSuggestion;
            $voteSuggestion->setSuggestion($this);
        }

        return $this;
    }

    public function removeVoteSuggestion(VoteSuggestion $voteSuggestion): self
    {
        if ($this->voteSuggestions->contains($voteSuggestion)) {
            $this->voteSuggestions->removeElement($voteSuggestion);
            // set the owning side to null (unless already changed)
            if ($voteSuggestion->getSuggestion() === $this) {
                $voteSuggestion->setSuggestion(null);
            }
        }

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
