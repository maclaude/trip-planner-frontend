<?php

namespace App\Repository;

use App\Entity\VoteProjectDates;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method VoteProjectDates|null find($id, $lockMode = null, $lockVersion = null)
 * @method VoteProjectDates|null findOneBy(array $criteria, array $orderBy = null)
 * @method VoteProjectDates[]    findAll()
 * @method VoteProjectDates[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VoteProjectDatesRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, VoteProjectDates::class);
    }

    // /**
    //  * @return VoteProjectDates[] Returns an array of VoteProjectDates objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?VoteProjectDates
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
