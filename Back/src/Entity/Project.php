<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(normalizationContext={"groups"={"project"}})
 * @ORM\Entity(repositoryClass="App\Repository\ProjectRepository")
 */
class Project
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"project"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"project"})
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups({"project"})
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=50)
     * @Groups({"project"})
     */
    private $destination;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProjectDates", mappedBy="project", orphanRemoval=true)
     * @Groups({"project"})
     */
    private $projectDates;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="projects")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"project"})
     */
    private $owner;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\User", inversedBy="projectsParticipation")
     * @Groups({"project"})
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\UserMessage", mappedBy="project", orphanRemoval=true)
     */
    private $userMessages;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Suggestion", mappedBy="project", orphanRemoval=true)
     * @Groups({"project"})
     */
    private $suggestions;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"project"})
     */
    private $lat;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"project"})
     */
    private $lng;

    public function __construct()
    {
        $this->projectDates = new ArrayCollection();
        $this->user = new ArrayCollection();
        $this->userMessages = new ArrayCollection();
        $this->suggestions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

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

    public function getDestination(): ?string
    {
        return $this->destination;
    }

    public function setDestination(string $destination): self
    {
        $this->destination = $destination;

        return $this;
    }

    /**
     * @return Collection|ProjectDates[]
     */
    public function getProjectDates(): Collection
    {
        return $this->projectDates;
    }

    public function addProjectDate(ProjectDates $projectDate): self
    {
        if (!$this->projectDates->contains($projectDate)) {
            $this->projectDates[] = $projectDate;
            $projectDate->setProject($this);
        }

        return $this;
    }

    public function removeProjectDate(ProjectDates $projectDate): self
    {
        if ($this->projectDates->contains($projectDate)) {
            $this->projectDates->removeElement($projectDate);
            // set the owning side to null (unless already changed)
            if ($projectDate->getProject() === $this) {
                $projectDate->setProject(null);
            }
        }

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): self
    {
        $this->owner = $owner;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user[] = $user;
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->user->contains($user)) {
            $this->user->removeElement($user);
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
            $userMessage->setProject($this);
        }

        return $this;
    }

    public function removeUserMessage(UserMessage $userMessage): self
    {
        if ($this->userMessages->contains($userMessage)) {
            $this->userMessages->removeElement($userMessage);
            // set the owning side to null (unless already changed)
            if ($userMessage->getProject() === $this) {
                $userMessage->setProject(null);
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
            $suggestion->setProject($this);
        }

        return $this;
    }

    public function removeSuggestion(Suggestion $suggestion): self
    {
        if ($this->suggestions->contains($suggestion)) {
            $this->suggestions->removeElement($suggestion);
            // set the owning side to null (unless already changed)
            if ($suggestion->getProject() === $this) {
                $suggestion->setProject(null);
            }
        }

        return $this;
    }

    public function getLat(): ?float
    {
        return $this->lat;
    }

    public function setLat(?float $lat): self
    {
        $this->lat = $lat;

        return $this;
    }

    public function getLng(): ?float
    {
        return $this->lng;
    }

    public function setLng(?float $lng): self
    {
        $this->lng = $lng;

        return $this;
    }
}
