<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 */
class User
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $avatar;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="users")
     * @ORM\JoinColumn(nullable=false)
     */
    private $role;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteProjectDates", mappedBy="user", orphanRemoval=true)
     */
    private $voteProjectDates;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Project", mappedBy="owner", orphanRemoval=true)
     */
    private $projects;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Project", mappedBy="user")
     */
    private $projectsParticipation;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserMessage", mappedBy="user", orphanRemoval=true)
     */
    private $userMessages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Suggestion", mappedBy="user", orphanRemoval=true)
     */
    private $suggestions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteSuggestion", mappedBy="user", orphanRemoval=true)
     */
    private $voteSuggestions;

    public function __construct()
    {
        $this->voteProjectDates = new ArrayCollection();
        $this->projects = new ArrayCollection();
        $this->projectsParticipation = new ArrayCollection();
        $this->userMessages = new ArrayCollection();
        $this->suggestions = new ArrayCollection();
        $this->voteSuggestions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getAvatar(): ?string
    {
        return $this->avatar;
    }

    public function setAvatar(?string $avatar): self
    {
        $this->avatar = $avatar;

        return $this;
    }

    public function getRole(): ?Role
    {
        return $this->role;
    }

    public function setRole(?Role $role): self
    {
        $this->role = $role;

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
            $voteProjectDate->setUser($this);
        }

        return $this;
    }

    public function removeVoteProjectDate(VoteProjectDates $voteProjectDate): self
    {
        if ($this->voteProjectDates->contains($voteProjectDate)) {
            $this->voteProjectDates->removeElement($voteProjectDate);
            // set the owning side to null (unless already changed)
            if ($voteProjectDate->getUser() === $this) {
                $voteProjectDate->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Project[]
     */
    public function getProjects(): Collection
    {
        return $this->projects;
    }

    public function addProject(Project $project): self
    {
        if (!$this->projects->contains($project)) {
            $this->projects[] = $project;
            $project->setOwner($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->contains($project)) {
            $this->projects->removeElement($project);
            // set the owning side to null (unless already changed)
            if ($project->getOwner() === $this) {
                $project->setOwner(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Project[]
     */
    public function getProjectsParticipation(): Collection
    {
        return $this->projectsParticipation;
    }

    public function addProjectsParticipation(Project $projectsParticipation): self
    {
        if (!$this->projectsParticipation->contains($projectsParticipation)) {
            $this->projectsParticipation[] = $projectsParticipation;
            $projectsParticipation->addUser($this);
        }

        return $this;
    }

    public function removeProjectsParticipation(Project $projectsParticipation): self
    {
        if ($this->projectsParticipation->contains($projectsParticipation)) {
            $this->projectsParticipation->removeElement($projectsParticipation);
            $projectsParticipation->removeUser($this);
        }

        return $this;
    }

    /**
     * @return Collection|UserMessage[]
     */
    public function getUserMessages(): Collection
    {
        return $this->userMessages;
    }

    public function addUserMessage(UserMessage $userMessage): self
    {
        if (!$this->userMessages->contains($userMessage)) {
            $this->userMessages[] = $userMessage;
            $userMessage->setUser($this);
        }

        return $this;
    }

    public function removeUserMessage(UserMessage $userMessage): self
    {
        if ($this->userMessages->contains($userMessage)) {
            $this->userMessages->removeElement($userMessage);
            // set the owning side to null (unless already changed)
            if ($userMessage->getUser() === $this) {
                $userMessage->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Suggestion[]
     */
    public function getSuggestions(): Collection
    {
        return $this->suggestions;
    }

    public function addSuggestion(Suggestion $suggestion): self
    {
        if (!$this->suggestions->contains($suggestion)) {
            $this->suggestions[] = $suggestion;
            $suggestion->setUser($this);
        }

        return $this;
    }

    public function removeSuggestion(Suggestion $suggestion): self
    {
        if ($this->suggestions->contains($suggestion)) {
            $this->suggestions->removeElement($suggestion);
            // set the owning side to null (unless already changed)
            if ($suggestion->getUser() === $this) {
                $suggestion->setUser(null);
            }
        }

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
            $voteSuggestion->setUser($this);
        }

        return $this;
    }

    public function removeVoteSuggestion(VoteSuggestion $voteSuggestion): self
    {
        if ($this->voteSuggestions->contains($voteSuggestion)) {
            $this->voteSuggestions->removeElement($voteSuggestion);
            // set the owning side to null (unless already changed)
            if ($voteSuggestion->getUser() === $this) {
                $voteSuggestion->setUser(null);
            }
        }

        return $this;
    }
}
