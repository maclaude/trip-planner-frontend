<?php

namespace App\Repository;

use App\Entity\ProjectDates;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method ProjectDates|null find($id, $lockMode = null, $lockVersion = null)
 * @method ProjectDates|null findOneBy(array $criteria, array $orderBy = null)
 * @method ProjectDates[]    findAll()
 * @method ProjectDates[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectDatesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, ProjectDates::class);
    }

    // /**
    //  * @return ProjectDates[] Returns an array of ProjectDates objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?ProjectDates
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
