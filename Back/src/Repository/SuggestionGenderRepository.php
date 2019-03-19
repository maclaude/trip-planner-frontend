<?php

namespace App\Repository;

use App\Entity\SuggestionGender;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method SuggestionGender|null find($id, $lockMode = null, $lockVersion = null)
 * @method SuggestionGender|null findOneBy(array $criteria, array $orderBy = null)
 * @method SuggestionGender[]    findAll()
 * @method SuggestionGender[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SuggestionGenderRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, SuggestionGender::class);
    }

    // /**
    //  * @return SuggestionGender[] Returns an array of SuggestionGender objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?SuggestionGender
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
