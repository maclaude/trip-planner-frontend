<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields={"email"}, message="Il existe déjà un compte avec cet email")
 */
class User implements UserInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=30)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=50)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $avatar;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Role", inversedBy="users")
     */
    private $role;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteProjectDates", mappedBy="user")
     */
    private $voteProjectDates;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserMessage", mappedBy="user")
     */
    private $userMessages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\VoteSuggestion", mappedBy="user")
     */
    private $voteSuggestions;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Suggestion", mappedBy="user")
     */
    private $suggestions;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Project", mappedBy="user")
     */
    private $projects;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Project", mappedBy="owner")
     */
    private $projectsOwner;

    public function __construct()
    {
        $this->voteProjectDates = new ArrayCollection();
        $this->userMessages = new ArrayCollection();
        $this->voteSuggestions = new ArrayCollection();
        $this->suggestions = new ArrayCollection();
        $this->projects = new ArrayCollection();
        $this->projectsOwner = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getPassword(): string
    {
        return (string) $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getSalt()
    {
        // not needed when using the "bcrypt" algorithm in security.yaml
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
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
            $project->addUser($this);
        }

        return $this;
    }

    public function removeProject(Project $project): self
    {
        if ($this->projects->contains($project)) {
            $this->projects->removeElement($project);
            $project->removeUser($this);
        }

        return $this;
    }

    /**
     * @return Collection|Project[]
     */
    public function getProjectsOwner(): Collection
    {
        return $this->projectsOwner;
    }

    public function addProjectsOwner(Project $projectsOwner): self
    {
        if (!$this->projectsOwner->contains($projectsOwner)) {
            $this->projectsOwner[] = $projectsOwner;
            $projectsOwner->setOwner($this);
        }

        return $this;
    }

    public function removeProjectsOwner(Project $projectsOwner): self
    {
        if ($this->projectsOwner->contains($projectsOwner)) {
            $this->projectsOwner->removeElement($projectsOwner);
            // set the owning side to null (unless already changed)
            if ($projectsOwner->getOwner() === $this) {
                $projectsOwner->setOwner(null);
            }
        }

        return $this;
    }
}
